import { Component, OnInit, OnDestroy } from '@angular/core';

//---------------------------------------------------------------------
//Form related
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//---------------------------------------------------------------------

import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';

//---------------------------------------------------------------------
//For the constructor
import { FormsService } from '../services/forms.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
//----------------------------------------------------------------------

import { Router } from "@angular/router";


@Component({
  selector: 'ter-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit, OnDestroy {

  //--------------------------
  outcomings: string[] = [
    "Remissão parcial",
    "Sem evidência de doença",
    "Doença estável",
    "Doença em progressão",
    "Óbito",
    "Sem informação"
  ];
  //---------------------------

  //--------------------------------------------
  fields: FormGroup;
  //------------------------------------------

  //--------------------------------------
  //Font awesome
  faHospitalUser = faHospitalUser;
  //----------------------------------------

  //-----------------------------
  savedToDatabase = false;
  //---------------------------------


  constructor(
    private fb: FormBuilder,
    private formsService: FormsService,
    private utilService: UtilService,
    private localStorageService: LocalStorageService,
    private router: Router,

  ) {

    this.fields = fb.group({
      outcoming: []
    })

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.localStorageService.delete("page1");
    this.localStorageService.delete("page2");
    this.localStorageService.delete("page3");
    this.localStorageService.delete("page4");
  }


  //---------------------------------------------------

  save() {
    this.formsService.submitFormPage5(this.utilService.withoutEmptyValues(this.fields.value))
      .subscribe((res) => {
        this.savedToDatabase = true;
        this.utilService.openSnackBar(res.success_msg, "x")
      })

  }

  finalize() {
    this.formsService.finalizeSubmission()
      .subscribe((res) => {
        this.savedToDatabase = true;
        this.utilService.openSnackBar("Thanks!", "x");
        this.localStorageService.saveJSON(res.success_msg, "mongo_id");
        this.router.navigate(['/patientform/receipt']);
      })
  }
  //---------------------------------------------------
}
