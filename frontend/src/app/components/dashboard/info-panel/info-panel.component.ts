import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'ter-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  //----------------
  step = 0;
  //----------------

  //---------------------------------------
  //mobile related
  showOnSmallDevice: boolean = true;
  //---------------------------------------

  watcher: Subscription;


  constructor(private utilService: UtilService,
    public authenticationService: AuthenticationService
  ) {

    this.watcher = this.utilService.createObservableMobile()
      .subscribe(info => {
        this.showOnSmallDevice = info;
      });
  }

  //-------------------------------------------------
  //life hook
  ngOnInit() {
  }


  ngOnDestroy() {
    this.watcher.unsubscribe;
  }
  //-----------------------------------------------
  //-----------------------------------------------
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  //----------------------------------------
  getUserForms() {
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.formSubmitted : [];
  }
  //----------------------------------------
}
//-----------------------------------------

