import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Page4Component } from '../page4.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesPage4Guard implements CanDeactivate<Page4Component> {

  constructor(private localStorageService: LocalStorageService) { }

  canDeactivate(component: Page4Component) {

    if (component.fields.dirty && !component.savedToDatabase) {
      const confirm = window.confirm("You have unsaved changes. Still want to leave?");
      if (confirm)
        this.localStorageService.delete("form4");
      return confirm;
    } else {
      return true;
    }
  }
}
