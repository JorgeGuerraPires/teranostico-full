import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { faDna, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'ter-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() userSideBar = new EventEmitter();

  //-------------------------
  //Font Awesome
  faDna = faDna;
  faUser = faUser;
  faUsers = faUsers;

  //-------------------------

  //---------------------------------
  showLogo = true;
  //--------------------------------

  watcher: Subscription;
  //activeMediaQuery = '';

  constructor(
    mediaObserver: MediaObserver,
    public authenticationService: AuthenticationService) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias == 'xs') {
        this.loadMobileContent();
      }
      else this.showLogo = true;
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  loadMobileContent() {
    this.showLogo = false;
  }


  openSideBar() {
    this.userSideBar.emit();
  }

  ngOnInit() {
    console.log(this.authenticationService.getCurrentUser().name)
  }

}
