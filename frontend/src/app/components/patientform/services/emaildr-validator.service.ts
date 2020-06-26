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
    return this.http.post(`${this.BASE_URL}/api/users/checkemail`, { email: field.value })
  }

}
