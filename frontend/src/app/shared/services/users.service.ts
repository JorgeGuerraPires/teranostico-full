import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../interfaces/user';
import { map, catchError } from 'rxjs/operators';
import { UtilService } from './util.service';
import { throwError } from 'rxjs';
import { ServerResponse } from '../interfaces/server-response';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private BASE_URL = environment.API_URL; //reference to the base URL address of the API

  constructor(
    private http: HttpClient, // Inject the HTTP client
    private utilService: UtilService,
  ) { }


  public getAllUsers() {
    const url: string = `${this.BASE_URL}/api/admin/getallusers`;
    return this.http.get<User[]>(url).pipe(

      //Catch errors
      catchError((error) => {
        //---------------------------------------------------------------
        /**
         * Note 16 08 2020. Due to problems at the server of Fiocruz,
         * I had to set this server related problem. This is for when the server
         * does not repond properly. 
         */
        if (error instanceof HttpErrorResponse && error.statusText === "Unknown Error") {
          this.utilService.openSnackBar("Server problem: please, try again.", "x");
          return throwError(error);

        }
        //---------------------------------------------------------------

        //----------------------------------------------------------------
        else if (error instanceof HttpErrorResponse && error.statusText === "Unauthorized") {
          this.utilService.openSnackBar("Unauthorized: you may need to logout and login again.", "x");
          return throwError(error);
        }
        //----------------------------------------------------------------

        else {
          this.utilService.openSnackBar("Sorry, something went wrong :(", "x")
          return throwError(error);
        }

      })
    );
  }

  public deleteUserById(_id: string) {
    const url: string = `${this.BASE_URL}/api/admin/deleteuserbyid/${_id}`;
    return this.http.delete<User>(url);
  }

  public editUser(user: User) {
    const url: string = `${this.BASE_URL}/api/user`;
    return this.http.put<String>(url, user);
  }

  public verifyToken(token: String) {
    const url: string = `${this.BASE_URL}/api/users/verify/${token}`;
    return this.http.get<User>(url);
  }


  resetpassword(userid: String) {
    const url: string = `${this.BASE_URL}/api/admin/resetpassword/${userid}`;
    return this.http.post<User>(url, {})
      .pipe(
        // map(res => res as resServerRegister),
        catchError((error) => {

          if (error instanceof HttpErrorResponse && error.error[0].msg) {
            this.utilService.openSnackBar(error.error[0].msg, "x")
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      );
  }

  //------------------------------------------------------
  public clearAllFailedLogin(user) {
    const url: string = `${this.BASE_URL}/api/user/failedlogin/${user}`;

    return this.http.put(url, {})
      .pipe(
        map(res => res as ServerResponse),
        catchError((error) => {

          if (error instanceof HttpErrorResponse && error.error[0].msg) {
            this.utilService.openSnackBar(error.error[0].msg, "x")
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      );
  }
  //---------------------------------------------------------

  //------------------------------------------------------
  public switchUserState(userid: string) {
    const url: string = `${this.BASE_URL}/api/admin/switchuserstate`;

    return this.http.put(url, { userid })
      .pipe(
        map(res => res as ServerResponse),
        catchError((error) => {

          if (error instanceof HttpErrorResponse && error.error[0].msg) {
            this.utilService.openSnackBar(error.error[0].msg, "x")
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      );
  }
  //---------------------------------------------------------


  //------------------------------------------------------
  public setasadmin(userid: string) {
    const url: string = `${this.BASE_URL}/api/admin/setasadmin`;

    return this.http.put(url, { userid })
      .pipe(
        map(res => res as ServerResponse),
        catchError((error) => {

          if (error instanceof HttpErrorResponse && error.error[0].msg) {
            this.utilService.openSnackBar(error.error[0].msg, "x")
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      );
  }
  //---------------------------------------------------------


  //------------------------------------------------------
  public unsetasadmin(userid: string) {
    const url: string = `${this.BASE_URL}/api/admin/unsetasadmin`;

    return this.http.put(url, { userid })
      .pipe(
        map(res => res as ServerResponse),
        catchError((error) => {

          if (error instanceof HttpErrorResponse && error.error[0].msg) {
            this.utilService.openSnackBar(error.error[0].msg, "x")
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      );
  }
  //---------------------------------------------------------



}
