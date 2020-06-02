import { Injectable, Inject } from '@angular/core';
import { BROWSER_STORAGE } from '../miscellaneous/storage';
import { Formid } from '../interfaces/patientForm';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,

  ) { }

  //-------------------------------------------------------
  //Related to Patient form
  public saveJSON(item, name) {
    this.storage.setItem(name, JSON.stringify(item));
  }

  public getFormid(): Formid {
    return JSON.parse(this.storage.getItem("formid")) as Formid;
  }

  public delete(item: string) {
    this.storage.removeItem(item);
  }

  //----------------------------------------------------


  //------------------------------------------------
  //Toke related storage
  public getToken(): string {
    //Creates the getToken function
    return this.storage.getItem("theranostic-token");
  }

  public saveToken(token: string): void {
    //Creates the saveToken function
    this.storage.setItem("theranostic-token", token);
  }

  public saveRefreshToken(token: string): void {
    //Creates the saveToken function
    this.storage.setItem("theranostic-RefreshToken", token);
  }
  public getLocalRefreshToken(): string {
    //Creates the getToken function
    return this.storage.getItem("theranostic-RefreshToken");
  }

  public clearall() {
    this.storage.clear();
  }
}
