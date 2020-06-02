import { Component, OnInit } from '@angular/core';

import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/interfaces/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilService } from 'src/app/shared/services/util.service';

//------------------------------------------------------------------
export interface Userinfo {
  info: string;
  tag: string;
  method: string;
  buttonName: string;
}
//------------------------------------------------------------------

@Component({
  selector: 'ter-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  //------------------------------
  //Font awesome
  faSmile = faSmile
  //------------------------------

  displayedColumns: string[] = ["information", "value", "obs."];
  SuccessMessage: string;
  ErrorMessage: string;

  //---------------------------------------
  //This is the data source that feeds the table
  dataSource: Userinfo[];



  constructor(
    public authenticationService: AuthenticationService,
    private usersService: UsersService,
    private utilService: UtilService
  ) {

    this.userinformation();
  }

  ngOnInit() {

  }

  //----------------------------------------------------------------------------------------------
  //Gathering information from the user and print them out
  public getUsername(): string {
    /**Goal: get user information and print them out at the dashboard or similar informative board */
    //1. get the user object
    const user: User = this.authenticationService.getCurrentUser();
    //2. return the user information
    return user ? user.name : "Guest";
  }

  public getTypeOfAccount(): string {
    /**Goal: get user information and print them out at the dashboard or similar informative board */
    //1. get the user object
    const user: User = this.authenticationService.getCurrentUser();
    //2. return the user information
    //console.log(user);
    return user.typeOfAccount ? `(${user.typeOfAccount})` : "";
  }

  public getLevel(): string {
    /**Goal: get user information and print them out at the dashboard or similar informative board */
    //1. get the user object
    const user: User = this.authenticationService.getCurrentUser();
    //2. return the user information
    return user ? user.level : "no level identified";
  }

  public lastLogin(): string {
    /**Goal: get user information and print them out at the dashboard or similar informative board */
    //1. get the user object
    const user: User = this.authenticationService.getCurrentUser();
    //2. return the user information

    return user ? user.lastLogin : "";
  }

  public failedLogin(): string {
    /**Goal: get user information and print them out at the dashboard or similar informative board */
    //1. get the user object
    const user: User = this.authenticationService.getCurrentUser();

    //2. return the user information
    return user ? this.fromDatesToString(user.failedLogin) : "";
  }

  public clearAllFailedLogin() {
    const user: User = this.authenticationService.getCurrentUser();

    this.usersService
      .clearAllFailedLogin(user._id).subscribe(() => {
        this.authenticationService.refreshToken()
          .subscribe(() => {
            this.utilService.openSnackBar("We just refreshed your info!", "x");
            this.userinformation();
          }
          );
      })
  }

  public onClick(method: string) {
    this[method]();
  }
  //----------------------------------------------------------------------------------------------
  //------------------------------------------------------------------
  //Supporters
  private fromDatesToString(dates: string[]): string {
    let output = ""
    dates.forEach(element => output += String(new Date(element)) + " || ")
    return output;
  }

  private userinformation() {
    this.dataSource = [
      {
        //  position: 1,
        tag: "name",
        info: this.getUsername(),
        method: "",
        buttonName: "",
      },
      {
        //position: 2,
        tag: "Level of privilege",
        info: ` ${this.getLevel()} ${this.getTypeOfAccount()}`,
        method: "",
        buttonName: "",
      },
      {
        // position: 3,
        tag: "Last Login",
        info: ` ${this.lastLogin()}`,
        method: "",
        buttonName: "",
      },
      {
        // position: 4,
        tag: "failed Login",
        info: this.failedLogin(),
        method: "clearAllFailedLogin",
        buttonName: "clean all",
      },
    ];
    //---------------------------------------
  }
  //-----------------------------------------------------------------

}