import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//-----------------------------------------------
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//-----------------------------------------------

@Component({
  selector: 'ter-medicalreport',
  templateUrl: './medicalreport.component.html',
  styleUrls: ['./medicalreport.component.scss']
})
export class MedicalreportComponent implements OnInit {

  //----------------------------------------------------------
  readonly searchForm: FormGroup;
  //---------------------------------------------------------
  //------------------------------------------------------
  // @Output() patientid = new EventEmitter<String>();
  //--------------------------------------------------
  patientid;

  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({
      patientid: ["", Validators.minLength(10)]
    });
  }

  ngOnInit() {
  }

  search() {
    //----------------------------------------------------
    //this will make sure that the galaxy component will just change if the user hits search
    this.patientid = this.searchForm.value.patientid;
    //--------------------------------------------------


    // console.log(this.patientid)
    // console.log(this.searchForm.value)
    // this.patientid.emit(this.searchForm.value.patientid);
  }
}
