
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { ErrorStateMatcher } from '@angular/material';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UtilService } from 'src/app/shared/services/util.service';


@Component({
  selector: 'ter-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  hide = true;//this is for password
  isActive = false;

  //-------------------------------------------------
  public pageContent = {
    //Page content object for the usual page data
    header: {
      title: "Password Reset",
    },
    info: {
      note:
        "Once you reset the password, you no longer will be able to use the old one. The change is immediately. The passwords are hashed, thus, we cannot provide it to you if you lose it. Keep that in mind! ",
      contactus: "Should you prefer, contact us on teranostico@gmail.com",
    },
  };
  //------------------------------------------------

  //--------------------------------------------
  formModel: FormGroup;
  //------------------------------------------
  //-----------------------------------------
  faKey = faKey;
  //----------------------------------------


  constructor(private fb: FormBuilder, public authenticationService: AuthenticationService, private utilService: UtilService) {
    this.formModel = fb.group({
      //Personal info

      passwordsGroup: fb.group({ // new password
        currentPassword: ['', [Validators.minLength(6), Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
        pconfirm: [''],
      }, { validator: [equalValidator, differentValidator] })

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

  resetPassword() {
    this.authenticationService.resetpassword(
      {
        password: this.formModel.value.passwordsGroup.password,
        currentPassword: this.formModel.value.passwordsGroup.currentPassword,
        username: this.authenticationService.getCurrentUser().email
      })
      .subscribe((res) => this.utilService.openSnackBar(res.success_msg, "x"))
  }

}//end of ResetpasswordComponent


//--------------------------------------------------------
//Support functions
function equalValidator({ value }: FormGroup): { [key: string]: any } {
  /**this function makes sure the passwords match */
  const [first, second, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[second]);
  return valid ? null : { equal: true };
}

function differentValidator({ value }: FormGroup): { [key: string]: any } {
  /**this function makes sure the passwords match */
  const [first, second, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] !== value[first]);
  return valid ? null : { different: true };
}

//----------------------------------------------------------

// // /** Error when either control or the form is invalid. */
export class ShowOnFormInvalidStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    return !!((control && control.invalid) || (form && form.hasError('equal') && form.hasError('different')));
  }
}


