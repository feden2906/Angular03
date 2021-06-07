import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {PostComponent} from "./components/posts/post/post.component";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./modules/components.module').then(m => m.ComponentsModule)},
  {path: 'posts', loadChildren: () => import('./modules/components.module').then(m => m.ComponentsModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
