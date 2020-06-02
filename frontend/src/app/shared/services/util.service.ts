import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable, interval, Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  watcher: Subscription;

  constructor(private _snackBar: MatSnackBar, private mediaObserver: MediaObserver) { }

  //-----------------------------------------------------------
  getScreenSize(): Observable<string> {
    /**This method return an observable that any component can 
     * subscribe to, regarding the screen size. 
     */
    return new Observable(
      observer => {
        this.mediaObserver.media$.subscribe((change: MediaChange) => {
          observer.next(change.mqAlias)
        });
      }
    );
  }
  //---------------------------------------------------------


  //-----------------------------------------------------------
  createObservableMobile(): Observable<boolean> {
    /**This method return an observable that any component can 
     * subscribe to, regarding the screen size. 
     */
    return new Observable(
      observer => {
        this.mediaObserver.media$.subscribe((change: MediaChange) => {
          if (change.mqAlias == 'xs') {//is the screen big????
            observer.next(false)//nope, the screen is small!
          }
          else observer.next(true) //yes, the screen is not small!
        });
      }
    );
  }
  //---------------------------------------------------------

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

  //--------------------------------------------
  createObservableService(): Observable<Date> {

    return new Observable(
      observer => {
        interval(1000)
          .subscribe((_) => observer.next(new Date())
          );
      }
    );
  }
  //---------------------------------------------


  withoutEmptyValues(object: any): any {
    return Object.keys(object).reduce((queryParams: any, key) => {
      if (object[key]) { queryParams[key] = object[key]; }
      return queryParams;
    }, {});
  }
}
