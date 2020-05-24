import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPanelComponent } from './user-panel.component';
import { UsersComponent } from './users/users.component';
import { UsersEditorComponent } from './users-editor/users-editor.component';


const routes: Routes = [
  {
    path: '', component: UserPanelComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'userseditor', component: UsersEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
