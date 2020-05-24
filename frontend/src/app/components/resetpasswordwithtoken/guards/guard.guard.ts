import { Injectable, NgZone } from '@angular/core';
import { CanActivate, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilService } from 'src/app/shared/services/util.service';


import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  checking;

  constructor(
    private usersService: UsersService,
    private utilService: UtilService,

  ) { }


  canActivate(destination: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.usersService.verifyToken(destination.params.jwt)
      .pipe(
        map(res => {
          return true;
        }),
        catchError((error) => {

          if (error instanceof HttpErrorResponse && error.error.msg) {
            this.utilService.openSnackBar(error.error.msg, "x")
            return throwError(error);

          } else {
            return throwError(error);
          }
        })
      )
  }
}//end of class





