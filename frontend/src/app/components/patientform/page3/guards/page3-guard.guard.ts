import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UtilService } from 'src/app/shared/services/util.service';


@Injectable({
  providedIn: 'root'
})
export class Page3GuardGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private utilService: UtilService,
    private router: Router
  ) { }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!this.localStorageService.getJSON("formid") && !!this.localStorageService.getJSON("page2"))
      return !!this.localStorageService.getJSON("formid");
    else {
      this.utilService.openSnackBar("please, submit first a header to the form", "x")
      this.router.navigate(["/patientform/formid"]);
    }

  }

}
