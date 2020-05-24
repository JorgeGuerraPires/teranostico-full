import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpasswordwithtokenComponent } from './resetpasswordwithtoken.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ResetpasswordwithtokenComponent],
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
      { path: '', component: ResetpasswordwithtokenComponent }
    ]),
    //---------------------------------------

  ]
})
export class ResetpasswordwithtokenModule { }
