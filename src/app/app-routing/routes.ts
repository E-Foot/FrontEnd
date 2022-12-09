import { Routes } from '@angular/router';


import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Us06Component } from '../us06/us06.component';
import { ReservationComponent } from '../reservation/reservation.component'; 
import { StadesComponent } from '../stades/stades.component'; 

export const routes: Routes = [
  { path: 'login',     component: LoginComponent },
  { path: 'stadee',     component: Us06Component },
  { path: 'stade',     component: StadesComponent },
  { path: 'reservation',     component: ReservationComponent },
  { path: 'signup',  component: RegisterComponent }
  
];