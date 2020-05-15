import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CurrentTimeComponent } from './current-time/current-time.component';



@NgModule({
  declarations: [DashboardComponent, InfoPanelComponent, CurrentTimeComponent],
  imports: [
    FlexLayoutModule,

    AngularmaterialModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ]),
  ]
})
export class DashboardModule { }
