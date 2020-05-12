import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';
import { map, tap, catchError } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly BASE_URL = environment.API_URL; //reference to the base URL address of the API

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private utilService: UtilService) { }

  login(user: User) {
    return this.http.post(`${this.BASE_URL}/users/login`, user)
      .pipe(
        map(res => res as LoginResponse),
        // map(res => this.localStorageService.saveToken(res.token))
        tap(res => {
          this.localStorageService.saveToken(res.token);
          this.localStorageService.saveRefreshToken(res.refreshToken)
        }),
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error["error"].message) {
            this.utilService.openSnackBar(error["error"].message, "x")
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
}
