import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private _snackBar: MatSnackBar) { }

  //----------------------------------------------
  openSnackBar(message: string, action: string) {
    this._snackBar
      .open(message, action, {
        duration: message.length * 90
      })
      .onAction()
      .subscribe(() => {
        console.log("Action activated");
      });
  }
  //----------------------------------------------

}
