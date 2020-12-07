import { Component, OnInit } from '@angular/core';
import { SendsamplesService } from "./sendsamples.service"
import { UtilService } from 'src/app/shared/services/util.service';


@Component({
  selector: 'ter-sendsamples',
  templateUrl: './sendsamples.component.html',
  styleUrls: ['./sendsamples.component.scss']
})
export class SendsamplesComponent implements OnInit {

  //---------------------------------
  //note 25 11 2020: there is no form validation here, interesting to use formbuilder
  public message: string;
  public field = {
    patientid: "",
    service: "",
    trackingNumber: "",
    lastName: "",
    firstName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalcode: "",
    phoneNumber: "",
    email: "",
    recipient: "Fiocruz"
  };
  //---------------------------------

  constructor(
    private sendsamplesService: SendsamplesService,
    private utilService: UtilService

  ) { }

  ngOnInit() {
  }

  onSalveForm() {
    // console.log("here")
    this.sendsamplesService.salvesampleSendingDetails(this.field)
      .subscribe((res) => this.utilService.openSnackBar(res.success_msg, "x")
      );
  }
}
