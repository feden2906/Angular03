import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m=>m.UserModule)},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
