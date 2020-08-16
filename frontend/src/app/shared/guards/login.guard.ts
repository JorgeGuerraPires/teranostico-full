import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate() {
    let loggedIn = this.authenticationService.isThereAToken();

    if (loggedIn) {

      this.router.navigate(["/dashboard"]);
    }

    return !loggedIn;
  }
}
