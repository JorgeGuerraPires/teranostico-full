import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { FormidComponent } from 'src/app/components/patientform/formid/formid.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<FormidComponent> {

  canDeactivate(component: FormidComponent) {
    console.log(component.fields.value)

    if (component.fields.value) {
      return window.confirm("You have unsaved changes. Still want to leave?");
    } else {
      return true;
    }
  }
}
