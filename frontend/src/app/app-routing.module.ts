import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  //-----------------------------------------------------
  //Welcome!
  {
    path: "",
    loadChildren: './components/welcome/welcome.module#WelcomeModule'
    // component: WelcomeComponent,
    //canActivate: [LoginGuard],
  },
  //------------------------------------------------------

  //-----------------------------------------------------
  //Login
  {
    path: "login",
    loadChildren: './components/login/login.module#LoginModule'
    // component: LoginComponent,
  },
  //------------------------------------------------------




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
