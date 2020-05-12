import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class ProtectedGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }
  canActivate() {
    return this.canLoad();
  }

  canLoad() {
    if (!this.authService.isThereAToken()) {
      this.router.navigate(["/login"]);
    }
    return this.authService.isThereAToken();
  }
}
