import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormidComponent } from './formid/formid.component';
import { UnsavedChangesGuard } from './formid/unsaved-changes.guard';
import { Page1Component } from './page1/page1.component';


const routes: Routes = [
  {
    path: 'formid', component: FormidComponent,
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: 'form1', component: Page1Component

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientformRoutingModule { }
