

import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

//-----------------------------------------------
const materialComponents = [MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule]
//------------------------------------------------


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularmaterialModule { }

