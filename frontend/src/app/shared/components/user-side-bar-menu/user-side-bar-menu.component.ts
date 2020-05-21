import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

import { faSignOutAlt, faUser, faKey } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'ter-user-side-bar-menu',
  templateUrl: './user-side-bar-menu.component.html',
  styleUrls: ['./user-side-bar-menu.component.scss']
})
export class UserSideBarMenuComponent implements OnInit {

  //-----------------------------------------
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
  faKey = faKey;
  //----------------------------------------


  @Output() userSideBar = new EventEmitter();

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.userSideBar.emit();
    this.authenticationService.logout();

  }
}
