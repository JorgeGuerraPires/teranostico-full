

import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule, MatToolbarModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatGridListModule, MatTableModule } from '@angular/material';

//-----------------------------------------------
const materialComponents = [MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule,
  MatToolbarModule, MatExpansionModule, MatDatepickerModule,
  MatNativeDateModule, MatSidenavModule, MatGridListModule, MatTableModule
]
//------------------------------------------------


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularmaterialModule { }

