import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { LoginComponent } from './Components/Pages/login/login.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'register', component:SignupComponent},
  {path: 'login', component:LoginComponent},

  {path:'**',redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
