import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";

const routes: Routes = [
  {path: '', component:UsersComponent},
  {path: '', component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
