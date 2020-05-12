import { Component, OnInit } from '@angular/core';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;//this is for password

  //--------------------------------------------
  formModel: FormGroup;
  //------------------------------------------
  //-----------------------------------------
  faSignInAlt = faSignInAlt
  //----------------------------------------


  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.formModel = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)]
    }, { updateOn: "blur" });
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.authenticationService.login(this.formModel.value)
      .subscribe(() => this.router.navigateByUrl("/dashboard"));//after login, this will lead the user to the dashboard
  }

}

/** Error when either control or the form is invalid. */
export class ShowOnFormInvalidStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    return !!((control && control.invalid));
  }
}


