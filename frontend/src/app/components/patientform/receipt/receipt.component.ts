import { Component, OnInit, OnDestroy } from '@angular/core';

import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Formid } from 'src/app/shared/interfaces/patientForm';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'ter-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit, OnDestroy {

  //---------------------------------------------
  formid: Formid;
  mongo_id: String;
  date: String
  //---------------------------------------------

  constructor(
    private localStorageService: LocalStorageService,
    public authenticationService: AuthenticationService
  ) {
    this.formid = JSON.parse(this.localStorageService.getJSON("formid"));
    this.mongo_id = JSON.parse(this.localStorageService.getJSON("mongo_id"));
    const aux = new Date();
    this.date = `${aux.getDate()}/${aux.getMonth() + 1}/${aux.getUTCFullYear()}`;
  }

  ngOnInit() {


  }

  ngOnDestroy() {
    this.localStorageService.delete("formid");
    this.localStorageService.delete("mongo_id");
  }


}
