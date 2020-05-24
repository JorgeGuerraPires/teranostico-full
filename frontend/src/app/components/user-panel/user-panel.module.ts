import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteRoutingModule } from './route-routing.module';
import { UserPanelComponent } from './user-panel.component';
import { UsersComponent } from './users/users.component';
import { UsersEditorComponent } from './users-editor/users-editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularmaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';




@NgModule({
  declarations: [UserPanelComponent, UsersComponent, UsersEditorComponent],
  imports: [
    ClipboardModule,
    FormsModule,
    CommonModule,
    RouteRoutingModule,
    //---------------------------------------------------
    //User Interface related, appearance related
    FontAwesomeModule,
    AngularmaterialModule,
    FlexLayoutModule,
    //---------------------------------------------------

  ]
})
export class UserPanelModule { }
