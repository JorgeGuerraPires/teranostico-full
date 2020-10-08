import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


import { FinalReportHeader } from "../interfaces/FinalReportHeader"
import { ServerResponse } from 'src/app/shared/interfaces/server-response';

import { UtilService } from 'src/app/shared/services/util.service';


import { FinalReport } from "../interfaces/FinalReport"


@Injectable({
  providedIn: 'root'
})
export class FinalReportService {

  //-------------------------
  private readonly BASE_URL = environment.API_URL; //reference to the base URL address of the API
  //---------------------------------

  constructor(private http: HttpClient, private utilService: UtilService) { }

  //------------------------------------------------------------------
  submitHeader(header: FinalReportHeader) {

    // console.log(header);
    return this.http.post(`${this.BASE_URL}/api/finalreport/header`, header)
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
      )//end of pipe
  }
  //-------------------------------------------------------------

  //------------------------------------------------------------------
  getFinalReportbyId(id: String) {

    // console.log(header);
    return this.http.get(`${this.BASE_URL}/api/finalreport/${id}`)
      .pipe(
        //Transform the response into Final Report format
        map(res => res as FinalReport),
        //Catch errors
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error["error"].message) {
            this.utilService.openSnackBar(error["error"].message, "x")
            return throwError(error);

          } else {
            return throwError(error);
          }
        })
      )//end of pipe
  }
  //-------------------------------------------------------------





}
