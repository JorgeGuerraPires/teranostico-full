

import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule, MatToolbarModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatGridListModule } from '@angular/material';

//-----------------------------------------------
const materialComponents = [MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule,
  MatToolbarModule, MatExpansionModule, MatDatepickerModule,
  MatNativeDateModule, MatSidenavModule, MatGridListModule
]
//------------------------------------------------


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularmaterialModule { }

