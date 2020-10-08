import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Formid, FormPage1, FormPage2, FormPage3, FormPage4, FormPage5, Form } from 'src/app/shared/interfaces/patientForm';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { UtilService } from 'src/app/shared/services/util.service';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private readonly BASE_URL = environment.API_URL; //reference to the base URL address of the API


  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) { }

  submitFormid(formid: Formid) {
    return this.http.post(`${this.BASE_URL}/api/patient/form/formid`, formid)
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


  submitFormPage1(formPage1: FormPage1) {
    return this.http.post(`${this.BASE_URL}/api/patient/form/formpage1`, formPage1)
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
  //------------------------------------------------------------

  //-------------------------------------------------------------
  submitFormPage2(formPage2: FormPage2) {
    return this.http.post(`${this.BASE_URL}/api/patient/form/formpage2`, formPage2)
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
  //------------------------------------------------------------

  //-------------------------------------------------------------
  submitFormPage3(formPage3: FormPage3) {
    return this.http.post(`${this.BASE_URL}/api/patient/form/formpage3`, formPage3)
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
  //------------------------------------------------------------

  //-------------------------------------------------------------
  submitFormPage4(formPage4: FormPage4) {
    return this.http.post(`${this.BASE_URL}/api/patient/form/formpage4`, formPage4)
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
  //------------------------------------------------------------

  //-------------------------------------------------------------
  submitFormPage5(formPage5: FormPage5) {
    return this.http.post(`${this.BASE_URL}/api/patient/form/formpage5`, formPage5)
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
  //------------------------------------------------------------


  //-------------------------------------------------------------
  finalizeSubmission() {
    return this.http.get(`${this.BASE_URL}/api/patient/form/finalizesubmission`)
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
  //------------------------------------------------------------

  formById(id: String) {
    return this.http.get(`${this.BASE_URL}/api/patient/form/getformbyid/${id}`)
      .pipe(
        //Transform the response into something known here
        map(res => res as Form),
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
  //------------------------------------------------------------
}



