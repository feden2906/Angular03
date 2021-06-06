import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from "@angular/common/http";
import { UserRoutingModule } from './user-routing.module';

import { UsersComponent } from './components/users/users.component';
import {UserService} from "./services/user.service";
import { UserComponent } from './components/users/user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[UserService]
})
export class UserModule { }
