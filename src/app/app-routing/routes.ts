import { Routes } from '@angular/router';


import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Us06Component } from '../us06/us06.component';

export const routes: Routes = [
  { path: 'login',     component: LoginComponent },
  { path: 'stade',     component: Us06Component },
  { path: 'signup',  component: RegisterComponent }
  
];