import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Page2Component } from 'src/app/components/patientform/page2/page2.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesPage2Guard implements CanDeactivate<Page2Component> {

  constructor(private localStorageService: LocalStorageService) { }

  canDeactivate(component: Page2Component) {


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
