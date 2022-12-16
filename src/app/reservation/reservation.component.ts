import { Component ,ViewChild} from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../shared/reservation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  reservation: Reservation;
  
  reservationCopy: Reservation;
  feedbackForm: FormGroup;
  nbj: Text;
  duree: String;
  date:Date;
  heure:String;

  constructor(private reservationService: ReservationService/*@Inject('baseURL') public baseURL*/){
    
  }
    @ViewChild("nbJ") nbjElem ;
    @ViewChild("duree") dureeElem ;
    @ViewChild("heure") heureElem ;
    @ViewChild("date") dateElem ;
    getValue() {
      //console.log(this.myNameElem);
      this.reservation= new Reservation;
      this.nbj=this.nbjElem.nativeElement.value;
      this.duree=this.dureeElem.nativeElement.value;
      this.date=this.dateElem.nativeElement.value;
      this.heure=this.heureElem.nativeElement.value;
      //console.log(this.nbj+' '+this.duree+' '+this.date+' '+this.heure);

      this.reservation.duree=this.duree;
      //console.log(this.reservation.duree);
      this.reservation.dateReservation=this.date;
      this.reservation.heureReservation=this.heure;
      console.log("%j", this.reservation);

    //  console.log(this.reservation);
      this.reservationService.putReservation(this.reservation).subscribe(reservation => {
        this.reservation = reservation; this.reservationCopy = reservation;
         })

    }
   /* onSubmit() {

     
     
     this.reservationService.putReservation(this.reservation).subscribe(reservation => {
      this.reservation = reservation; this.reservationCopy = reservation;
       })
    }*/
    


}
