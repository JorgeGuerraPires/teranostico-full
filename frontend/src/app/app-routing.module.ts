import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProtectedGuard } from './shared/guards/protected.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { GuardGuard } from './components/resetpasswordwithtoken/guards/guard.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ResetpasswordwithtokenComponent } from './components/resetpasswordwithtoken/resetpasswordwithtoken.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { HeaderComponent } from './components/finalreport/header/header.component';
import { RetreivedComponent } from './components/finalreport/retreived/retreived.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { MedicalreportComponent } from './components/medicalreport/medicalreport.component';
import { SendsamplesComponent } from './components/sendsamples/sendsamples.component';
// import { UnsavedChangesGuard } from './components/patientform/formid/unsaved-changes.guard';


const routes: Routes = [
  //-----------------------------------------------------
  //Welcome!
  {
    path: "",
    // loadChildren: './components/welcome/welcome.module#WelcomeModule',
    component: WelcomeComponent,
    canActivate: [LoginGuard],//this will make the user be redirected to dashboard in case of loggedin    
  },
  //------------------------------------------------------
  //-----------------------------------------------------
  //Login
  {
    path: "login",
    // loadChildren: './components/login/login.module#LoginModule',
    component: LoginComponent,
    canActivate: [LoginGuard]//this will make the user be redirected to dashboard in case of loggedin
  },
  //------------------------------------------------------

  //-----------------------------------------------------
  //Login
  {
    path: "register",
    // loadChildren: './components/register/register.module#RegisterModule',
    component: RegisterComponent,
    canActivate: [LoginGuard]//this will make the user be redirected to dashboard in case of loggedin
  },
  //------------------------------------------------------
  //-----------------------------------------------------
  //Dashboard
  {
    path: "dashboard",
    // loadChildren: './components/dashboard/dashboard.module#DashboardModule',
    component: DashboardComponent,
    //canActivate: [ProtectedGuard],
    canLoad: [ProtectedGuard],
  },
  //------------------------------------------------------
  //-----------------------------------------------------
  //About us
  {
    path: "aboutus",
    // loadChildren: './components/aboutus/aboutus.module#AboutusModule',
    component: AboutusComponent,
  },
  //------------------------------------------------------

  //------------------------------------------------------
  //-----------------------------------------------------
  //Reset password
  {
    path: "resetpassword",
    // loadChildren: './components/resetpassword/resetpassword.module#ResetpasswordModule',
    component: ResetpasswordComponent,
    canActivate: [ProtectedGuard],
    canLoad: [ProtectedGuard],
  },
  {
    path: "resetpasswordwithtoken/:jwt",
    // loadChildren: './components/resetpasswordwithtoken/resetpasswordwithtoken.module#ResetpasswordwithtokenModule',
    component: ResetpasswordwithtokenComponent,
    canActivate: [GuardGuard],
  },
  //------------------------------------------------------
  //user panel, administration
  {
    path: "userpanel",
    // loadChildren: './components/user-panel/user-panel.module#UserPanelModule',
    component: UserPanelComponent,
    canActivate: [ProtectedGuard, AdminGuard],
    canLoad: [ProtectedGuard, AdminGuard],
  },
  //------------------------------------------------------

  //------------------------------------------------------
  //Patient main form
  {
    path: "patientform",
    loadChildren: './components/patientform/patientform.module#PatientformModule',
    canActivate: [ProtectedGuard],
    canLoad: [ProtectedGuard],
  },
  //------------------------------------------------------



  //--------------------------------------------------------------
  //Final report related
  {
    path: "finalreport/header",
    component: HeaderComponent,
    canActivate: [ProtectedGuard],
    //note 31/08/2020 -> maybe add a guards for unsaved chances
  },

  {
    path: "finalreport/:id",
    component: RetreivedComponent,
    canActivate: [ProtectedGuard],
    //note 31/08/2020 -> maybe add a guards for unsaved chances
  },
  //----------------------------------------------------------
  {
    path: "galaxy/medicalreport",
    component: MedicalreportComponent,
    canActivate: [ProtectedGuard]
  },

  {
    path: "sendingsamples",
    component: SendsamplesComponent,
    canActivate: [ProtectedGuard]
  },

  {
    path: "galaxy/:patiendid",
    component: GalaxyComponent,
    canActivate: [ProtectedGuard]
  },


  //--------------------------------------------------------------

  //---------------------------------------------------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    //preload all modules, I had to add this on the hope to work well with the server of Fiocruz
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
