import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './shared/layout/layout.component';
import { UserSideBarMenuComponent } from './shared/components/user-side-bar-menu/user-side-bar-menu.component';
import { AngularmaterialModule } from './shared/modules/angular-material/angular-material.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    LayoutComponent,
    UserSideBarMenuComponent,
    MenuComponent
  ],
  imports: [
    MatSnackBarModule,
    HttpClientModule,//this is for http calls in the components
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
