import { Routes } from '@angular/router';


import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ReservationComponent } from '../reservation/reservation.component'; 
import { StadesComponent } from '../stades/stades.component'; 
import { PropStadesComponent } from '../prop-stades/prop-stades.component';
import { ComplexeComponent } from '../complexe/complexe.component';
import { HomeComponent } from '../home/home.component';
import { StadeComponent } from '../proprietaire/stade/stade.component';
import { PropComplexeComponent } from '../proprietaire/complexe/complexe.component';
import { ReservationTerrainComponent } from '../proprietaire/reservation-terrain/reservation-terrain.component' 
import { ReservationListeComponent } from '../proprietaire/reservation-liste/reservation-liste.component' 
import { SponsorshipComponent } from '../proprietaire/sponsorship/sponsorship.component'
import { AnnonceComponent } from '../annonce/annonce.component'
import { AnnoncesComponent } from '../annonces/annonces.component'
import { UsersComponent } from '../admin/users/users.component'
import { SignalsComponent } from '../admin/signals/signals.component';
import { BloquageComponent } from '../admin/bloquage/bloquage.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { PaiementComponent } from '../paiement/paiement.component';
import { ChartComponent } from '../proprietaire/chart/chart.component';

export const routes: Routes = [
  { path: '',     component: HomeComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'stade',     component: StadesComponent },
  { path: 'contact',     component: ContactusComponent },
  { path: 'paiement',     component: PaiementComponent },
  { path: 'reservation/:id',     component: ReservationComponent },
  { path: 'reservation',     component: ReservationComponent },
  { path: 'proprietaire/stade',     component: StadeComponent },
  { path: 'proprietaire/complexe',     component: PropComplexeComponent },
  { path: 'proprietaire/sponsor',     component: SponsorshipComponent },
  { path: 'proprietaire/chart',     component: ChartComponent },
  { path: 'proprietaire/reservations',     component: ReservationTerrainComponent },
  { path: 'proprietaire/reservations/liste',     component: ReservationListeComponent },
  { path: 'signup',  component: RegisterComponent },
  { path: 'complexe/:id',  component: ComplexeComponent },
  { path: 'annonce/:id',  component: AnnonceComponent },
  { path: 'annonces',  component: AnnoncesComponent },
  { path: 'admin/users',  component: UsersComponent },
  { path: 'admin/signals',  component: SignalsComponent },
  { path: 'admin/bloquage',  component: BloquageComponent },
  
  
];