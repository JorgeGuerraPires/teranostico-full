import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    FontAwesomeModule,
    AngularmaterialModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: WelcomeComponent }
    ]),
  ]
})
export class WelcomeModule { }
