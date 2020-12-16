import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RolComponent } from './components/rol/rol.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'rol',component:RolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
