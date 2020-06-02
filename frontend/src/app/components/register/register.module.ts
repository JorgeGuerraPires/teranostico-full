import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
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
    //---------------------------------------------------
    //Basics for every new module
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RegisterComponent }
    ]),
  ]
  //-------------------------------------------------

})
export class RegisterModule { }
