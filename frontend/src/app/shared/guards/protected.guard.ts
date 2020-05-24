import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: "root",
})
export class ProtectedGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private utilService: UtilService
  ) { }

  canActivate() {
    return this.canLoad();
  }

  canLoad() {
    if (!this.authService.isThereAToken()) {
      this.router.navigate(["/login"]);
      this.utilService.openSnackBar("You are trying to access a private resource. Please, login!", "x")

    }
    return this.authService.isThereAToken();
  }
}
