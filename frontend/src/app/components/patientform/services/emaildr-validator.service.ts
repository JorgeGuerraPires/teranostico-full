import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmaildrValidatorService {

  private readonly BASE_URL = environment.API_URL; //reference to the base URL address of the API

  constructor(private http: HttpClient) { }

  checkDoctorEmail(field: AbstractControl): Observable<ValidationErrors | null> {

    // in the real world you'd make an HTTP call to server to check if the value is valid

    // return of(field.value.indexOf('123') >= 0 ? null : { work: " you're not authorized to work" });
    // return of(field.value.indexOf('jorge') >= 0 ? null : { work: " you're not authorized to work" });
    return this.http.post(`${this.BASE_URL}/api/users/checkemail`, { email: field.value })
  }

}
