import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'ter-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {




  currentTime: Date;

  constructor(private utilService: UtilService) {

    this.utilService.createObservableService()
      .subscribe(data => this.currentTime = data);
  }



  ngOnInit() {
  }


}
