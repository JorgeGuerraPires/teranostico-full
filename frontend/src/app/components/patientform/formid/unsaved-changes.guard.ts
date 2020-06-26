import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { FormidComponent } from 'src/app/components/patientform/formid/formid.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<FormidComponent> {

  constructor(private localStorageService: LocalStorageService) { }

  canDeactivate(component: FormidComponent) {


    if (component.fields.dirty && !component.savedToDatabase) {
      const confirm = window.confirm("You have unsaved changes. Still want to leave?");
      if (confirm)
        this.localStorageService.delete("formid");
      return confirm;
    } else {
      return true;
    }
  }
}
