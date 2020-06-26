import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../services/forms.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Component({
  selector: 'ter-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  //--------------------------------------------
  fields: FormGroup;
  //------------------------------------------

  //-----------------------------
  savedToDatabase = false;
  //---------------------------------

  //--------------------------------------
  //-------------------------------------------------------------
  //Members
  // selectedTumorType: string;
  outros: string;
  tumorOptions: string[] = [
    "ductal in situ",
    "lobular in situ",
    "ductal infiltrante",
    "lobular infiltrante",
    "outros"
  ];
  //------------------------------------------------------------
  //----------------------------------------
  //----------------------------------------------------
  // selected: string;
  LinfonodosCondition: string[] = ["isolados", "comprometidos", "LS"];
  //-------------------------------------------------------

  //--------------------------------------------------------
  // selected: string;
  infiltrationCondition: string[] = ["perineural", "vascular"];
  //--------------------------------------------------------
  //------------------------------------------------------
  //------------------------------------------------  
  IMHQoptions: string[] = [
    "ER",
    "PR (ALLRED)",
    "HER2-IMHQ",
    "HER2-FISH",
    "Ki67",
    "p53",
    "Outros"
  ];
  //-----------------------------------------------


  //-----------------------------------------------------



  //---------------------------------------------
  constructor(
    private fb: FormBuilder,
    private formsService: FormsService,
    private utilService: UtilService,
    private localStorageService: LocalStorageService
  ) {

    this.fields = fb.group(
      {
        reportid: ["", Validators.required],
        examdate: ["", Validators.required],
        selectedTumorType: ["", Validators.required],
        othertumors: [""],
        tumorsize: ["", Validators.required],
        linfonodos: ["", Validators.required],
        infiltration: ["", Validators.required],
        IMHQ: fb.group(
          {
            option: ["", Validators.required],
            detail: [""]
          }
        ),
        classification: ["", Validators.required],
        ESTADIAMENTO: fb.group(
          {
            TNM: ["", Validators.required],
            pTpNM: ["", Validators.required]
          })
      }, { updateOn: "blur" });
  }
  //-------------------------------------------



  ngOnInit() {
  }

  //---------------------------------------------------

  save() {
    this.formsService.submitFormPage3(this.utilService.withoutEmptyValues(this.fields.value))
      .subscribe((res) => {
        this.savedToDatabase = true;
        this.utilService.openSnackBar(res.success_msg, "x")
      })
  }

  next() {
    //------------------------------------------------------------------------------------------------
    //This will save a local version of the form page
    this.localStorageService.saveJSON(this.utilService.withoutEmptyValues(this.fields.value), "page3")
    //-------------------------------------------------------------------------------------------
  }

  //---------------------------------------------------



}
