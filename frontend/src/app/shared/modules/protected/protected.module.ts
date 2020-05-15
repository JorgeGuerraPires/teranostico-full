//-------------------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
//-----------------------------------------------------------

//---------------------------------------------------------
import { TokenInterceptor } from "../../interceptor/token.interceptor";
//---------------------------------------------------------


@NgModule({
  declarations: [],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  imports: [
    CommonModule
  ]
})
export class ProtectedModule { }
