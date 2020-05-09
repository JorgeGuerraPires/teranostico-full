import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly BASE_URL = environment.API_URL; //reference to the base URL address of the API


  constructor(private http: HttpClient, ) { }


  login(user: User) {
    return this.http.post(`${this.BASE_URL}/users/login`, user)
  }
}
