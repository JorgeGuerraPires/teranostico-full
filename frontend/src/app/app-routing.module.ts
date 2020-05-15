import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedGuard } from './shared/guards/protected.guard';
import { LoginGuard } from './shared/guards/login.guard';


const routes: Routes = [

  //-----------------------------------------------------
  //Welcome!
  {
    path: "",
    loadChildren: './components/welcome/welcome.module#WelcomeModule',
    canActivate: [LoginGuard]//this will make the user be redirected to dashboard in case of loggedin
  },
  //------------------------------------------------------
  //-----------------------------------------------------
  //Login
  {
    path: "login",
    loadChildren: './components/login/login.module#LoginModule',
    canActivate: [LoginGuard]//this will make the user be redirected to dashboard in case of loggedin
  },
  //------------------------------------------------------

  //-----------------------------------------------------
  //Login
  {
    path: "register",
    loadChildren: './components/register/register.module#RegisterModule',
    canActivate: [LoginGuard]//this will make the user be redirected to dashboard in case of loggedin
  },
  //------------------------------------------------------



  //-----------------------------------------------------
  //Dashboard
  {
    path: "dashboard",
    loadChildren: './components/dashboard/dashboard.module#DashboardModule',
    canActivate: [ProtectedGuard],
    canLoad: [ProtectedGuard],
  },
  //------------------------------------------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
