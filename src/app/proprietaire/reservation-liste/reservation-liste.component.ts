import { Component,OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/shared/reservation';

@Component({
  selector: 'app-reservation-liste',
  templateUrl: './reservation-liste.component.html',
  styleUrls: ['./reservation-liste.component.scss']
})
export class ReservationListeComponent implements OnInit{

  constructor(private reservationService: ReservationService){}
  reservations:Reservation[]
  ngOnInit(): void {

    this.reservationService.getReservationsByProprietaire(1).subscribe(reservations => this.reservations = reservations );
    
    
 
   }

}
