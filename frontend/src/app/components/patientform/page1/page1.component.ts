import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../services/forms.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Component({
  selector: 'ter-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  //-----------------------------------------
  isActive = false;
  //----------------------------------------

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

    this.fields = fb.group({
      sampleDate: ["", Validators.required],
      collectorName: ["", Validators.required],
      institution: ["", Validators.required],
      medicalrecord: ["", Validators.required],
      name: ["", Validators.required],
      mothername: ["", Validators.required],
      birthday: ["", Validators.required]
    }, { updateOn: "blur" });

  }

  ngOnInit() {
  }

  save() {
    this.formsService.submitFormPage1(this.fields.value)
      .subscribe((res) => {
        this.savedToDatabase = true;
        this.utilService.openSnackBar(res.success_msg, "x")
      })
  }



  next() {
    //------------------------------------------------------------------------------------------------
    //This will save a local version of the form page
    this.localStorageService.saveJSON(this.utilService.withoutEmptyValues(this.fields.value), "page1")
    //-------------------------------------------------------------------------------------------
  }


}
