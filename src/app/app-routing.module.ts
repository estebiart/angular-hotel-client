import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent}from './components/list/list.component';
import {FormComponent}from './components/form/form.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SecretComponent } from './components/secret/secret.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: SecretComponent,
    canActivate: [AuthGuard],
  },
  { 
      path: "login", 
    component: LoginComponent, 
    pathMatch: "full" 
  },
  { 
    path: "register",
   component: RegisterComponent, 
   pathMatch: "full"
   },
  {
    path: 'users',
    component:ListComponent
  },
  {
    path:'users/add',
    component:FormComponent
  },
  {
    path:'users/edit/:id',
    component:FormComponent
  },
  {
    path:'users/:id',
    component:UserComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
