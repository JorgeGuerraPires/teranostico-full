import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormidComponent } from './formid/formid.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { UnsavedChangesGuard } from 'src/app/components/patientform/formid/unsaved-changes.guard';
import { EmaildrValidatorService } from './services/emaildr-validator.service';
import { Page1Component } from './page1/page1.component';
import { PatientformRoutingModule } from './patientform-routing.module';



@NgModule({
  declarations: [FormidComponent, ProgressbarComponent, Page1Component],
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
    PatientformRoutingModule
    // RouterModule.forChild([
    //   {
    //     path: 'formid', component: FormidComponent,
    //     canDeactivate: [UnsavedChangesGuard]
    //   }
    // ]),
  ],
  //-------------------------------------------------
  providers: [EmaildrValidatorService],
})
export class PatientformModule { }
