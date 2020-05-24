import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthenticationService,
    private utilService: UtilService
  ) { }


  canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canLoad();
  }

  canLoad() {

    if (this.authService.getCurrentUser().level && !(this.authService.getCurrentUser().level === "admin")) {
      this.utilService.openSnackBar("Sorry, you do not have administration privilege!", "x")
    }


    return this.authService.getCurrentUser().level === "admin";
  }

}
