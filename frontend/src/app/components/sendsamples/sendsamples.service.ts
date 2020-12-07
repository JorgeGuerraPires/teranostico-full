import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UtilService } from '../../shared/services/util.service';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';


@Injectable({
  providedIn: 'root'
})
export class SendsamplesService {
  //-----------------------------------------------------------------------------------
  private BASE_URL = environment.API_URL; //reference to the base URL address of the API
  //-------------------------------------------------------------------------------------


  constructor(
    private http: HttpClient, // Inject the HTTP client
    private utilService: UtilService,
  ) { }


  //----------------------------------------------------------------------------
  salvesampleSendingDetails(sampleDetails: SampleSendingDetails) {

    const url: string = `${this.BASE_URL}/api/miscellaneous/samplesendingdetails`;


    return this.http.post<ServerResponse>(url, sampleDetails)
      .pipe(
        //Transform the response into something known here
        map(res => res as ServerResponse),
        //Catch errors
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error["error"].message) {
            this.utilService.openSnackBar(error["error"].message, "x")
            return throwError(error);

          } else {
            return throwError(error);
          }
        })
      )//end of pipe;


  }
  //----------------------------------------------------------------------------



}

//----------------------------------------------------------------------------
interface SampleSendingDetails {
  patientid: String;
  //header/identifier
  recipient: String;
  //packageDetails
  service: String;
  trackingNumber: String;
  //sender
  firstName: String;
  lastName: String;
  address1: String;
  address2: String;
  city: String;
  state: String;
  postalcode: String;
  //contactinfo
  phoneNumber: String;
  email: String;
}
//-----------------------------------------------------------------------------
