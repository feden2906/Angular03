import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from "@angular/common/http";
import { ComponentsRoutingModule } from './components-routing.module';

import {UserService} from "../components/services/user.service";
import {PostService} from "../components/services/post.service";
import { UsersComponent } from '../components/users/users.component';
import { UserComponent } from '../components/users/user/user.component';
import {PostComponent} from "../components/posts/post/post.component";
import { PostsComponent } from '../components/posts/posts.component';



@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,

  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserService,
    PostService
  ]
})
export class ComponentsModule { }
