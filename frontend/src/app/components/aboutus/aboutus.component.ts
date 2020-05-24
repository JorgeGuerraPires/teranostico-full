import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ter-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 1],
    ['md', 1],
    ['lg', 2],
    ['xl', 3],
  ]);


  constructor(private utilService: UtilService) {

    this.columns$ = this.utilService.getScreenSize()
      .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc))
      );
    // this.columns$.subscribe((info) => console.log(info))
  }

  ngOnInit() {
  }

}
