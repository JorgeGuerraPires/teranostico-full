import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    AngularmaterialModule,
    CommonModule,
    FlexLayoutModule,

    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ]),

  ]
})
export class LoginModule { }
