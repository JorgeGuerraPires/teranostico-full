import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'ter-user-side-bar-menu',
  templateUrl: './user-side-bar-menu.component.html',
  styleUrls: ['./user-side-bar-menu.component.scss']
})
export class UserSideBarMenuComponent implements OnInit {

  //-----------------------------------------
  faSignOutAlt = faSignOutAlt;
  faUser = faUser
  //----------------------------------------


  @Output() userSideBar = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.userSideBar.emit();
    this.authenticationService.logout();

  }
}
