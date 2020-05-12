import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { faDna, faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ter-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //-------------------------
  //Font Awesome
  faDna = faDna;
  faUser = faUser
  //-------------------------

  //---------------------------------
  showLogo = true;
  //--------------------------------

  watcher: Subscription;
  //activeMediaQuery = '';

  constructor(mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      // this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      // console.log(this.activeMediaQuery);

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
    // Do something special since the viewport is currently
    // using mobile display sizes
    // console.log("you are on mobile")
    this.showLogo = false;
  }

  ngOnInit() {
  }

}
