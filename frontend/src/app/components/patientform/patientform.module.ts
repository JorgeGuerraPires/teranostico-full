import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormidComponent } from './formid/formid.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { UnsavedChangesGuard } from 'src/app/shared/guards/unsaved-changes.guard';



@NgModule({
  declarations: [FormidComponent, ProgressbarComponent],
  imports: [
    //---------------------------------------------------
    //User Interface related, appearance related
    FontAwesomeModule,
    AngularmaterialModule,
    FlexLayoutModule,
    //---------------------------------------------------

    //--------------------------------------------------
    //Form related
    ReactiveFormsModule,//this is related to the formGroup    
    //------------------------------------------------


    //---------------------------------------------------
    //Basics for every new module
    CommonModule,
    RouterModule.forChild([
      {
        path: 'formid', component: FormidComponent,
        canDeactivate: [UnsavedChangesGuard]
      }
    ]),
  ]
  //-------------------------------------------------
})
export class PatientformModule { }
