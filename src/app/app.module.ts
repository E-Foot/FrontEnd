import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StadesComponent } from './stades/stades.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { Us06Component } from './us06/us06.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaiementComponent } from './paiement/paiement.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MapComponent } from './map/map.component';
import { HeaderProprietaireComponent } from './header-proprietaire/header-proprietaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PropStadesComponent } from './prop-stades/prop-stades.component';
import { ComplexeComponent } from './complexe/complexe.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StadeComponent } from './proprietaire/stade/stade.component';
import { AddStadeComponent } from './proprietaire/add-stade/add-stade.component';
import { SponsorshipComponent } from './proprietaire/sponsorship/sponsorship.component';
import { PropComplexeComponent } from './proprietaire/complexe/complexe.component';
import { ReservationTerrainComponent } from './proprietaire/reservation-terrain/reservation-terrain.component';
import { ReservationListeComponent } from './proprietaire/reservation-liste/reservation-liste.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { UsersComponent } from './admin/users/users.component';
import { SignalsComponent } from './admin/signals/signals.component';
import { BloquageComponent } from './admin/bloquage/bloquage.component';
import { ContactusComponent } from './contactus/contactus.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    StadesComponent,
    Us06Component,
    ReservationComponent,
    PaiementComponent,
    MapComponent,
    HeaderProprietaireComponent,
    PropStadesComponent,
    ComplexeComponent,
    HomeComponent,
    FooterComponent,
    StadeComponent,
    AddStadeComponent,
    SponsorshipComponent,
    PropComplexeComponent,
    ReservationTerrainComponent,
    ReservationListeComponent,
    AnnonceComponent,
    AnnoncesComponent,
    HeaderAdminComponent,
    UsersComponent,
    SignalsComponent,
    BloquageComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDoU3JSWTN__iFC2BPqf6F47eXpbBXqZPs'
      //AIzaSyDvjRJ4hPTpxWNcB01x1pzQtupCSXhksbs
    }),
    BrowserAnimationsModule,
    MatIconModule,
    OverlayModule

   
  ],
  providers: [
     {provide: 'BaseURL', useValue: baseURL}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, Component } from '@angular/core';

// import { AgmCoreModule } from '@agm/core';

// @Component({
//   selector: 'app-root',
//   styles: [`
//     agm-map {
//       height: 300px;
//     }
//   `],
//   template: `
//   <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
//   `
// })
// export class AppComponent {
//   lat: number = 51.678418;
//   lng: number = 7.809007;
// }

// @NgModule({
//   imports: [
//     BrowserModule,
//     AgmCoreModule.forRoot({
//       apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
//     })
//   ],
//   declarations: [ AppComponent ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule {}
