import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormidComponent } from './formid/formid.component';
import { UnsavedChangesGuard } from './formid/unsaved-changes.guard';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

import { UnsavedChangesPage1Guard } from "./page1/unsaved-changes-page1.guard";
import { UnsavedChangesPage2Guard } from "./page2/unsaved-changes-page2.guard";
import { UnsavedChangesPage3Guard } from "./page3/guards/unsaved-changes-page3.guard";
import { Page1GuardGuard } from "./page1/guards/page1-guard.guard"
import { Page2GuardGuard } from "./page2/guards/page2-guard.guard"
import { Page3GuardGuard } from "./page3/guards/page3-guard.guard"

//page 4
import { Page4Component } from './page4/page4.component';
import { UnsavedChangesPage4Guard } from "./page4/guards/unsaved-changes-page4.guard";
import { Page4GuardGuard } from "./page4/guards/page4-guard.guard"
//-----

//page 5
import { Page5Component } from './page5/page5.component';
import { Page5Guard } from "./page5/guards/page5-guard.guard"
import { UnsavedChangesPage5Guard } from "./page5/guards/unsaved-changes-page5.guard";
//--------



import { ReceiptComponent } from "./receipt/receipt.component";
import { RetrievedComponent } from './retrieved/retrieved.component';

const routes: Routes = [
  {
    path: 'formid', component: FormidComponent,
    canDeactivate: [UnsavedChangesGuard],

  },
  {
    path: 'form1', component: Page1Component,
    canDeactivate: [UnsavedChangesPage1Guard],
    canLoad: [Page1GuardGuard],
    canActivate: [Page1GuardGuard]
  },
  {
    path: 'form2', component: Page2Component,
    canDeactivate: [UnsavedChangesPage2Guard],
    canLoad: [Page2GuardGuard],
    canActivate: [Page2GuardGuard]

  },
  {
    path: 'form3', component: Page3Component,
    canDeactivate: [UnsavedChangesPage3Guard],
    canLoad: [Page3GuardGuard],
    canActivate: [Page3GuardGuard]
  },

  {
    path: 'form4', component: Page4Component,
    canDeactivate: [UnsavedChangesPage4Guard],
    canLoad: [Page4GuardGuard],
    canActivate: [Page4GuardGuard]
  },
  {
    path: 'form5', component: Page5Component,
    // canDeactivate: [UnsavedChangesPage5Guard],
    // canLoad: [Page5Guard],
    // canActivate: [Page5Guard]
  },
  {
    path: 'receipt', component: ReceiptComponent,
    // canDeactivate: [UnsavedChangesPage4Guard],
    // canLoad: [Page4GuardGuard],
    // canActivate: [Page4GuardGuard]
  },
  {
    path: 'retriveById/:id', component: RetrievedComponent,
    // canDeactivate: [UnsavedChangesPage4Guard],
    // canLoad: [Page4GuardGuard],
    // canActivate: [Page4GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientformRoutingModule { }
