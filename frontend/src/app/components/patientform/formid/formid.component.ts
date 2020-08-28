import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ErrorStateMatcher } from '@angular/material';
import { UtilService } from 'src/app/shared/services/util.service';
import { FormsService } from '../services/forms.service';
import { EmaildrValidatorService } from '../services/emaildr-validator.service';
// import { PatientIDCheckerService } from "../services/patientID-checker.service"
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ter-formid',
  templateUrl: './formid.component.html',
  styleUrls: ['./formid.component.scss']
})
export class FormidComponent implements OnInit {

  isActive = false;

  //-----------------------------
  savedToDatabase = false;
  //---------------------------------

  //--------------------------------------------
  fields: FormGroup;
  //------------------------------------------

  //--------------------------------------
  faHospitalUser = faHospitalUser;
  //----------------------------------------

  //----------------------------------------------------
  privacyoption: string[] = [
    "Todas as informações que possam ser disponibilizadas", // nivel 1
    "Somente o necessário relacionado ao meu caso", // nivel 2
    "Somente o Resultado final" // nivel 3
  ];
  //-----------------------------------------------------


  //-------------------------------------------------------------------------------------------------------------------------------
  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private utilService: UtilService,
    private formsService: FormsService,
    private emaildrValidatorService: EmaildrValidatorService,
    // private patientIDCheckerService: PatientIDCheckerService

  ) {
    this.fields = fb.group({
      emaildr: ["", [Validators.required, Validators.email], emaildrValidatorService.checkDoctorEmail.bind(emaildrValidatorService)],
      patientid: ["", [Validators.required, Validators.minLength(10)]],
      levelofprivacy: ["", [Validators.required]],
      serverConsent: ["", [Validators.required]],
      patientidSecret: ["", [Validators.minLength(10)]],
    }, { updateOn: "blur" });

  }
  //-------------------------------------------------------------------------------------------------------------------------------

  ngOnInit() {
    //------------------------------------------------------------------
    const emaildrcheck = this.fields.get("emaildr");
    emaildrcheck.valueChanges.subscribe(res => this.fields.setErrors(res));
    //-----------------------------------------------------------------

    // //-------------------------------------------------------------
    // const patientIDchecker = this.fields.get("patientid");
    // patientIDchecker.valueChanges.subscribe(res => this.fields.setErrors(res));
    // //--------------------------------------------------------------

    //-----------------------------------------------------------------
    const patientcheck = this.fields.get("patientid");
    patientcheck.valueChanges
      .pipe(debounceTime(200))
      .subscribe(res => console.log(res))
    //---------------------------------------------------------------

  }


  next() {
    //------------------------------------------------------------------------------------------------
    //This will save a local version of the form page
    this.localStorageService.saveJSON(this.utilService.withoutEmptyValues(this.fields.value), "formid")
    //-------------------------------------------------------------------------------------------
  }

  save() {
    this.formsService.submitFormid(this.utilService.withoutEmptyValues(this.fields.value))
      .subscribe(res => {
        this.savedToDatabase = true;
        this.utilService.openSnackBar(res.success_msg, "x");

      });
  }

}


// // /** Error when either control or the form is invalid. */
export class ShowOnFormInvalidStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    return !!((control && control.invalid) || (form && form.hasError('res')));
  }
}