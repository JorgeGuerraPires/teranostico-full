import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/shared/services/util.service';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces/user';


import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'ter-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  //-----------------------------------------
  //Font Awesome
  faExclamation = faExclamationTriangle;
  //----------------------------------------


  selectedUser: User = {
    _id: "",
    email: "",
    name: "",
    level: "",
    lastLogin: "",
    //failedLogin: "",
    typeOfAccount: "",
    resetpassword: ""
  };



  //------------------------------------------------------------
  @ViewChild("alert", { static: true }) alert: ElementRef;
  //--------------------------------------------------------------

  //---------------------------------------------
  //mobile related
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 1],
    ['md', 1],
    ['lg', 2],
    ['xl', 2],
  ]);
  //-------------------------------------------



  constructor(private utilService: UtilService) {

    this.columns$ = this.utilService.getScreenSize()
      .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc))
      )
  }

  ngOnInit() {
  }


  closeAlert() {
    this.alert.nativeElement.classList.remove("show");
  }


  userHandle(event) {
    this.selectedUser = event;
  }
}
