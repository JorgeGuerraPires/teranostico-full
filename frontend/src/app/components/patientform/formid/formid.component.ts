import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ErrorStateMatcher } from '@angular/material';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'ter-formid',
  templateUrl: './formid.component.html',
  styleUrls: ['./formid.component.scss']
})
export class FormidComponent implements OnInit {


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
    private utilService: UtilService

  ) {
    this.fields = fb.group({
      emaildr: ["", [Validators.required, Validators.email]],
      patientid: ["", [Validators.required, Validators.minLength(10)]],
      levelofprivacy: ["", [Validators.required]],
      serverConsent: ["", [Validators.required]],
      patientidSecret: ["", [Validators.minLength(10)]],
    }, { updateOn: "blur" });

  }
  //-------------------------------------------------------------------------------------------------------------------------------

  ngOnInit() {
  }


  next() {
    this.localStorageService.saveJSON(this.utilService.withoutEmptyValues(this.fields.value), "formid")
  }


}


