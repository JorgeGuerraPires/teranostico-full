import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpasswordComponent } from './resetpassword.component';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ResetpasswordComponent],
  imports: [
    CommonModule,
    //---------------------------------------------------
    //User Interface related, appearance related
    FontAwesomeModule,
    AngularmaterialModule,
    FlexLayoutModule,
    //---------------------------------------------------

    //--------------------------------------------------
    //Form related
    ReactiveFormsModule,
    FormsModule,
    //-------------------------------------------------

    //-----------------------------------
    //This is standart in every new model
    RouterModule.forChild([
      { path: '', component: ResetpasswordComponent }
    ]),
    //---------------------------------------
  ]
})
export class ResetpasswordModule { }
