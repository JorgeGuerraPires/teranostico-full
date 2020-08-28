import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'ter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //--------------------------------------------
  fields: FormGroup;
  //------------------------------------------

  constructor(
    private fb: FormBuilder,
  ) {

    this.fields = fb.group({
      disease: [""],
      Name: [""],

    }, { updateOn: "blur" });



  }

  ngOnInit() {
  }

  save() {

    console.log(this.fields.value);


  }

}
