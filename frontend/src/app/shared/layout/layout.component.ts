import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  //---------------------------------------------------
  //Meta information

  version = "4.0.0";
  //-------------------------------------------------

  //--------------------------------------------------
  watcher: Subscription;
  showMessageSmallDevice = false;
  //--------------------------------------------------

  /**authenticationService is being used in the template, it is not useless! */
  constructor(public authenticationService: AuthenticationService, mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {

      if (change.mqAlias == 'xs') {
        this.loadMobileContent();
      } else this.showMessageSmallDevice = false;

    });
  }
  //--------------------------------------------------------
  //life cycle hooks
  ngOnInit() { }


  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
  //-------------------------------------------------------

  //------------------------------------------------------------
  //support methods
  loadMobileContent() {

    this.showMessageSmallDevice = true;
  }

  //--------------------------------------------------------
}
