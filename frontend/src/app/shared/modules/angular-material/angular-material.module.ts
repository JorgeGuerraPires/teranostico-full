

import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

//-----------------------------------------------
const materialComponents = [MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule,
  MatToolbarModule
]
//------------------------------------------------


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularmaterialModule { }

