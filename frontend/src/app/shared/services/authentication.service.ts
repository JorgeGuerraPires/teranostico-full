import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';
import { map, tap, catchError } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { UtilService } from './util.service';
import { resServerRegister } from 'src/app/components/register/register.component';
import { Router } from '@angular/router';
import { resetPassword } from '../interfaces/reset-password';
// import { ServerResponse } from 'http';
import { Observable } from 'rxjs';
import { ServerResponse } from '../interfaces/server-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly BASE_URL = environment.API_URL; //reference to the base URL address of the API

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private utilService: UtilService,
    private router: Router
  ) { }

  login(user: User) {
    return this.http.post(`${this.BASE_URL}/api/users/login`, user)
      .pipe(
        //Transform the response into something known here
        map(res => res as LoginResponse),
        //Save the tokens locally      
        tap(res => {
          this.localStorageService.saveToken(res.token);
          this.localStorageService.saveRefreshToken(res.refreshToken)
        }),
        //Catch errors
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error["error"].message) {
            this.utilService.openSnackBar(error["error"].message, "x")
            return throwError(error);
          }
          else if (error instanceof HttpErrorResponse && error.statusText === "Unknown Error") {
            console.log(error.statusText);
            this.utilService.openSnackBar("Server problem: please, try again.", "x")
            return throwError(error);
          }

          else {
            return throwError(error);
          }
        })
      )//end of pipe

  }//end of login

  register(user: User) {
    return this.http.post(`${this.BASE_URL}/api/users/register`, user)
      .pipe(
        map(res => res as resServerRegister),
        catchError((error) => {

          if (error instanceof HttpErrorResponse && error.error[0].msg) {
            this.utilService.openSnackBar(error.error[0].msg, "x")
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      )
  }

  public isThereAToken(): boolean {
    return !!this.localStorageService.getToken()
  }

  /**
   * @description this method is responsible to retrieving from the server
   * the user information
   */
  public getCurrentUser(): User {

    if (this.isThereAToken()) {
      const token: string = this.localStorageService.getToken();

      const { _id, name, email, level, lastLogin, failedLogin, status, formSubmitted } = JSON.parse(atob(token.split(".")[1]));
      return { _id, name, email, level, lastLogin, failedLogin, status, formSubmitted } as User; //Typecasts object to the User type
    }

  }
  public refreshToken() {

    return this.http.post(`${this.BASE_URL}/api/users/refreshtoken`, {
      refreshToken: this.localStorageService.getLocalRefreshToken()
    }).pipe(tap((tokens: LoginResponse) => {
      this.localStorageService.saveToken(tokens.token);
    }))
  }

  public logout(): void {
    // this.storage.clear(); //clear all current stored local variables
    this.localStorageService.clearall();
    this.router.navigateByUrl("/login");
  }


  public resetpassword(newPassword: resetPassword): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/users/resetpassword`, newPassword)
      .pipe(map(res => res as ServerResponse),
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.error.msg) {
            this.utilService.openSnackBar(error.error.msg, "x");
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      )
  }

  public resetpasswordWithToken(token: String, newpassword: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/users/resetpasswordwithtoken/${token}`, { newpassword })
      .pipe(map(res => res as ServerResponse),
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.error.msg) {
            this.utilService.openSnackBar(error.error.msg, "x");
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      )
  }
}
