import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../services/forms.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Component({
  selector: 'ter-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  isActive = true;

  //--------------------------------------------
  fields: FormGroup;
  //------------------------------------------

  //-----------------------------
  savedToDatabase = false;
  //---------------------------------

  constructor(
    private fb: FormBuilder,
    private formsService: FormsService,
    private utilService: UtilService,
    private localStorageService: LocalStorageService
  ) {

    this.fields = fb.group(

      {
        menopause: ["", Validators.required],
        weight: ["", Validators.required],
        height: fb.group({
          meter: ["", [Validators.required, Validators.pattern("[0-9]+")]],
          centimeter: ["", [Validators.required, Validators.pattern("[0-9]+")]]
        }),
        familyhistory: ["", Validators.required],
        relateddiseases: ["", Validators.required],
        previouscancers: ["", Validators.required]
      }, { updateOn: "blur" });
  }

  ngOnInit() {
  }

  save() {
    this.formsService.submitFormPage2(this.fields.value).subscribe((res) => {
      this.savedToDatabase = true;
      this.utilService.openSnackBar(res.success_msg, "x")
    });
  }

  next() {
    //------------------------------------------------------------------------------------------------
    //This will save a local version of the form page
    this.localStorageService.saveJSON(this.utilService.withoutEmptyValues(this.fields.value), "page2")
    //-------------------------------------------------------------------------------------------
  }



}
