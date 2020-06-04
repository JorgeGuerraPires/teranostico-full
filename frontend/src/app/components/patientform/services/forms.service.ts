import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Formid } from 'src/app/shared/interfaces/patientForm';
import { environment } from 'src/environments/environment';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private readonly BASE_URL = environment.API_URL; //reference to the base URL address of the API
  utilService: any;

  constructor(
    private http: HttpClient,
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


}
