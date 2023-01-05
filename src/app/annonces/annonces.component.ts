import { Component,OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../shared/reservation';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit{

  annonces: Reservation[]
  constructor(private reservationService: ReservationService )  { }


  ngOnInit(): void {

   this.reservationService.getAnnonces().subscribe(annonces => this.annonces = annonces );
   
   

  }

}
