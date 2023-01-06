import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../shared/reservation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private reservationService:ReservationService )  { }
  annonces:Reservation[]
  ngOnInit(): void {

    this.reservationService.getAnnonces().subscribe(annonces => this.annonces = annonces );
    
    
 
   }
  
}
