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


@NgModule({
  declarations: [LayoutComponent, MenuComponent, UserSideBarMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,//this is for http calls in the components
    MatSnackBarModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ProtectedModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
