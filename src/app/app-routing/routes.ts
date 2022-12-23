import { Routes } from '@angular/router';


import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Us06Component } from '../us06/us06.component';
import { ReservationComponent } from '../reservation/reservation.component'; 
import { StadesComponent } from '../stades/stades.component'; 
import { PropStadesComponent } from '../prop-stades/prop-stades.component';
import { ComplexeComponent } from '../complexe/complexe.component';
import { ComplexeComponent } from '../complexe/complexe.component';

export const routes: Routes = [
  { path: 'login',     component: LoginComponent },
  { path: 'stadee',     component: Us06Component },
  { path: 'stade',     component: StadesComponent },
  { path: 'reservation/:id',     component: ReservationComponent },
  { path: 'reservation',     component: ReservationComponent },
  { path: 'proprietaire/stade',     component: PropStadesComponent },
  { path: 'signup',  component: RegisterComponent },
  { path: 'complexe/:id',  component: ComplexeComponent }
  
];