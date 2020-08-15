import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { faSmile, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { UtilService } from 'src/app/shared/services/util.service';


@Component({
  selector: 'ter-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //--------------------------------------
  faSmile = faSmile;
  faSyncAlt = faSyncAlt;
  //-------------------------------------
  //--------------------------------------------
  //This variable decides what appears on extra small devices, just set in on a if statement
  //and the component will not appear on extra small devices
  showOnSmallDevice = false;
  //------------------------------------------


  watcher: Subscription;

  constructor(mediaObserver: MediaObserver, public authenticationService: AuthenticationService, private utilService: UtilService) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias == 'xs') {
        this.loadMobileContent();
      }
      else this.showOnSmallDevice = true;
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  loadMobileContent() {
    /**the function of this method is to make sure some functions will not show on small devices.
     * The idea is to keep the small device screen clean. 
     */
    this.showOnSmallDevice = false;
  }


  ngOnInit() {

  }

  refreshToken() {
    this.authenticationService.refreshToken().subscribe(() => {
      this.utilService.openSnackBar("Done!", "x");
    });
  }

}
