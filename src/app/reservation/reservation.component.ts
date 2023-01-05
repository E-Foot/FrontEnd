import { Component ,ViewChild} from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { StadeService } from '../services/stade.service';
import { Reservation } from '../shared/reservation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {formatDate} from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {  OnInit,Inject } from '@angular/core';
import { Stade } from '../shared/stade';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{
  

  reservation: Reservation;
  
  reservationCopy: Reservation;
  stadeCopy:Stade;
  feedbackForm: FormGroup;
  nbj: Text;
  duree: String;
  date:Date;
  heure:String;
stade:Stade
  constructor(private reservationService: ReservationService,private stadeService : StadeService, private route: ActivatedRoute,
    private location: Location)/*@Inject('baseURL') public baseURL*/{
    
  }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id)



  }
    @ViewChild("nbJ") nbjElem ;
    @ViewChild("duree") dureeElem ;
    @ViewChild("heure") heureElem ;
    @ViewChild("date") dateElem ;
    getValue() {
      
      this.reservation= new Reservation;
      this.nbj=this.nbjElem.nativeElement.value;
      this.duree=this.dureeElem.nativeElement.value;
      this.date=this.dateElem.nativeElement.value;
      this.heure=this.heureElem.nativeElement.value;
   
      this.reservation.duree=this.duree;
      
   
      this.reservation.dateReservation=this.date;
      this.reservation.heureReservation=this.heure;
      console.log("%j", this.reservation);

      const id = +this.route.snapshot.params['id'];

      this.stadeService.getStadesById(id).subscribe((stade) => {
        this.stade = stade;
        console.log(this.stade);
        this.reservation.stade=stade;
        console.log(this.reservation)
        this.reservationService.putReservation(this.reservation).subscribe(reservation => {
          this.reservation = reservation; /*this.reservationCopy = reservation;*/
           })
       });
       
       console.log('id  '+this.stade);


    }
 
}
