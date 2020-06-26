import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Page5Component } from '../page5.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesPage5Guard implements CanDeactivate<Page5Component> {

  constructor(private localStorageService: LocalStorageService) { }

  canDeactivate(component: Page5Component) {

    if (component.fields.dirty && !component.savedToDatabase) {
      const confirm = window.confirm("You have unsaved changes. Still want to leave?");
      if (confirm)
        this.localStorageService.delete("form5");
      return confirm;
    } else {
      return true;
    }
  }
}
