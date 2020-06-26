import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Page1Component } from 'src/app/components/patientform/page1/page1.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesPage1Guard implements CanDeactivate<Page1Component> {

  constructor(private localStorageService: LocalStorageService) { }

  canDeactivate(component: Page1Component) {


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
