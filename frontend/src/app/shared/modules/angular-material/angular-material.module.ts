

import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule, MatToolbarModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatGridListModule, MatTableModule, MatProgressBarModule, MatRadioModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';

//-----------------------------------------------
const materialComponents = [MatCardModule, MatDividerModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule,
  MatToolbarModule, MatExpansionModule, MatDatepickerModule,
  MatNativeDateModule, MatSidenavModule, MatGridListModule, MatTableModule,
  MatProgressBarModule, MatRadioModule, MatCheckboxModule, MatTooltipModule, MatSelectModule, MatProgressSpinnerModule, MatPaginatorModule
]
//------------------------------------------------


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularmaterialModule { }

