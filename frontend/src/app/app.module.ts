import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { MenuComponent } from './shared/components/menu/menu.component';
import { AngularmaterialModule } from './shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProtectedModule } from './shared/modules/protected/protected.module';
import { UserSideBarMenuComponent } from './shared/components/user-side-bar-menu/user-side-bar-menu.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { WelcomeModule } from './components/welcome/welcome.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AboutusModule } from './components/aboutus/aboutus.module';
import { ResetpasswordModule } from './components/resetpassword/resetpassword.module';
import { ResetpasswordwithtokenModule } from './components/resetpasswordwithtoken/resetpasswordwithtoken.module';
import { UserPanelModule } from './components/user-panel/user-panel.module';
import { HeaderComponent } from './components/finalreport/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, MenuComponent, UserSideBarMenuComponent, HeaderComponent],
  imports: [
    //----------------------------------
    WelcomeModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
    AboutusModule,
    ResetpasswordModule,
    ResetpasswordwithtokenModule,
    UserPanelModule,
    //-----------------------------------


    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,//this is for http calls in the components
    MatSnackBarModule,
    AngularmaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ProtectedModule,

    //--------------------------------------------------
    //Form related
    ReactiveFormsModule,//this is related to the formGroup    
    //------------------------------------------------

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
