import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Page3Component } from '../page3.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesPage3Guard implements CanDeactivate<Page3Component> {

  constructor(private localStorageService: LocalStorageService) { }

  canDeactivate(component: Page3Component) {


    if (component.fields.dirty && !component.savedToDatabase) {
      const confirm = window.confirm("You have unsaved changes. Still want to leave?");
      if (confirm)
        this.localStorageService.delete("form3");
      return confirm;
    } else {
      return true;
    }
  }
}
