import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UtilService } from '../../shared/services/util.service';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GalaxyService {

  private BASE_URL = environment.API_URL; //reference to the base URL address of the API

  constructor(
    private http: HttpClient, // Inject the HTTP client
    private utilService: UtilService,
  ) { }

  public getTargets(patientid) {

    //-------------------------------------------------------------
    const url: string = `${this.BASE_URL}/api/galaxy/geneArray/${patientid}`;
    //-------------------------------------------------------------

    return this.http.get<any>(url)
      .pipe(
        //Catch errors
        catchError((error) => {
          //---------------------------------------------------------------
          /**
           * Note 16 08 2020. Due to problems at the server of Fiocruz,
           * I had to set this server related problem. This is for when the server
           * does not repond properly. 
           */
          if (error instanceof HttpErrorResponse && error.statusText === "Unknown Error") {
            this.utilService.openSnackBar("Server problem: please, try again.", "x");
            return throwError(error);

          }
          //---------------------------------------------------------------

          //----------------------------------------------------------------
          else if (error instanceof HttpErrorResponse && error.statusText === "Unauthorized") {
            this.utilService.openSnackBar("Unauthorized: you may need to logout and login again.", "x");
            return throwError(error);
          }
          //----------------------------------------------------------------

          //----------------------------------------------------------------
          else if (error instanceof HttpErrorResponse && error.error.error_msg) {
            this.utilService.openSnackBar(error.error.error_msg, "x");
            return throwError(error);
          }
          //----------------------------------------------------------------

          else {
            this.utilService.openSnackBar("Unknown error :(", "x")
            return throwError(error);
          }

        })
      );
  }
}