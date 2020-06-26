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
import { PatientIDCheckerService } from './services/patientID-checker.service';

import { Page1Component } from './page1/page1.component';
import { PatientformRoutingModule } from './patientform-routing.module';
import { Page2Component } from './page2/page2.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { RetrievedComponent } from './retrieved/retrieved.component';


@NgModule({
  declarations: [FormidComponent, ProgressbarComponent, Page1Component, Page2Component, Page3Component, Page4Component, Page5Component, ReceiptComponent, RetrievedComponent],
  imports: [
    TextFieldModule,
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
  ],
  //-------------------------------------------------
  providers: [EmaildrValidatorService, PatientIDCheckerService],
})
export class PatientformModule { }
