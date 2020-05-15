//------------------------------------------------------
import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from "@angular/common/http";
//-----------------------------------------------------


//-----------------------------------------------------
import { AuthenticationService } from "../services/authentication.service";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, filter, take, switchMap } from "rxjs/operators";
import { LocalStorageService } from '../services/local-storage.service';
import { UtilService } from '../services/util.service';
//----------------------------------------------------


@Injectable()

export class TokenInterceptor implements HttpInterceptor {

    private isRefreshing = false;

    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );

    constructor(public authService: AuthenticationService,
        private localStorageService: LocalStorageService,
        private utilService: UtilService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (this.localStorageService.getToken()) {
            request = this.addToken(request, this.localStorageService.getToken());
        }

        return next.handle(request)
            .pipe(
                catchError((error) => {
                    // -------------------------------------------------------
                    //Show UI friendly message
                    if (error.error.message)
                        this.utilService.openSnackBar(error.error.message, "x")
                    //----------------------------------------------------
                    //----------------------------------------------------------------------
                    //handle internally, background, behind the scene
                    if (error instanceof HttpErrorResponse && error.status === 401) {
                        //console.log("handle401Error");
                        return this.handle401Error(request, next);
                    } else {
                        return throwError(error);
                    }
                })//end of catchError
            );
    }//end of intercept method

    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }


    /**Reference: https://www.youtube.com/watch?v=F1GUjHPpCLA. accessed on 23 04 2020 */
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        //console.log("here on handle401Error ");
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((token: any) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(token.jwt);
                    return next.handle(this.addToken(request, token.jwt));
                })
            );
        } else {
            return this.refreshTokenSubject.pipe(
                filter((token) => token != null),
                take(1),
                switchMap((jwt) => {
                    return next.handle(this.addToken(request, jwt));
                })
            );
        }
    }//end of handle401Error
}
