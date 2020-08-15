import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProtectedGuard } from './shared/guards/protected.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { GuardGuard } from './components/resetpasswordwithtoken/guards/guard.guard';
// import { UnsavedChangesGuard } from './components/patientform/formid/unsaved-changes.guard';


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
    //canActivate: [ProtectedGuard],
    canLoad: [ProtectedGuard],
  },
  //------------------------------------------------------
  //-----------------------------------------------------
  //About us
  {
    path: "aboutus",
    loadChildren: './components/aboutus/aboutus.module#AboutusModule',
  },
  //------------------------------------------------------

  //------------------------------------------------------
  //-----------------------------------------------------
  //Reset password
  {
    path: "resetpassword",
    loadChildren: './components/resetpassword/resetpassword.module#ResetpasswordModule',
    canActivate: [ProtectedGuard],
    canLoad: [ProtectedGuard],
  },
  {
    path: "resetpasswordwithtoken/:jwt",
    loadChildren: './components/resetpasswordwithtoken/resetpasswordwithtoken.module#ResetpasswordwithtokenModule',
    canActivate: [GuardGuard],
  },
  //------------------------------------------------------
  //user panel, administration
  {
    path: "userpanel",
    loadChildren: './components/user-panel/user-panel.module#UserPanelModule',
    canActivate: [ProtectedGuard, AdminGuard],
    canLoad: [ProtectedGuard, AdminGuard],
  },
  //------------------------------------------------------

  //------------------------------------------------------
  //Patient main form
  {
    path: "patientform",
    loadChildren: './components/patientform/patientform.module#PatientformModule',
    canLoad: [ProtectedGuard],
  },
  //------------------------------------------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    //preload all modules, I had to add this on the hope to work well with the server of Fiocruz
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
