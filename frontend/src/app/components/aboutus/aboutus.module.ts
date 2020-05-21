import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { RouterModule } from '@angular/router';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    //-----------------------------------
    //Appearance related imports
    //ReactiveFormsModule,
    //FormsModule,
    //FontAwesomeModule,
    AngularmaterialModule,
    //CommonModule,
    FlexLayoutModule,

    //----------------------------------
    //-----------------------------------
    //This is standart in every new model
    RouterModule.forChild([
      { path: '', component: AboutusComponent }
    ]),
    //---------------------------------------
  ]
})
export class AboutusModule { }
