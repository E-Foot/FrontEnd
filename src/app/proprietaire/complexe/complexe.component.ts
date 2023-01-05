import { Component,OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/shared/reservation';

@Component({
  selector: 'app-complexe',
  templateUrl: './complexe.component.html',
  styleUrls: ['./complexe.component.scss']
})
export class PropComplexeComponent {
  latitude: number = 31.630000;
  longitude: number = -8.008889;
  // locationChoosen = false;

 


}
