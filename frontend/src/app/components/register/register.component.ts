import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ErrorStateMatcher } from '@angular/material';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { tap } from 'rxjs/operators';


export interface resServerRegister {
  success_msg: string;
}

@Component({
  selector: 'ter-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;//this is for password

  //-------------------------------------------------
  public pageContent = {
    //Page content object for the usual page data
    header: {
      title: "Register",
    },
    info: {
      note:
        " After you create your account, we need to activate before you can access our system. It may take a while.",
      contactus: "Should you prefer, contact us on teranostico@gmail.com",
    },
  };
  //------------------------------------------------

  //--------------------------------------------
  formModel: FormGroup;
  //------------------------------------------
  //-----------------------------------------
  faUserPlus = faUserPlus;
  //----------------------------------------


  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private utilService: UtilService) {
    this.formModel = fb.group({
      //Personal info
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      //password
      passwordsGroup: fb.group({
        password: ['', [Validators.minLength(5), Validators.required]],
        pconfirm: ['']
      }, { validator: equalValidator })

    }, { updateOn: "blur" });
  }

  ngOnInit() {
  }

  //-------------------------------------------------------------
  //Methods
  register() {
    // console.log(this.formModel.value.passwordsGroup);
    this.authenticationService.register({
      email: this.formModel.value.email,
      password: this.formModel.value.passwordsGroup.password,
      name: this.formModel.value.name
    })
      .subscribe(res => this.utilService.openSnackBar(res.success_msg, "x"))
  }
  //-------------------------------------------------------------

}


//--------------------------------------------------------
//Support functions
function equalValidator({ value }: FormGroup): { [key: string]: any } {
  /**this function makes sure the passwords match */
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : { equal: true };
}
//----------------------------------------------------------

// // /** Error when either control or the form is invalid. */
export class ShowOnFormInvalidStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    return !!((control && control.invalid) || (form && form.hasError('equal')));
  }
}


