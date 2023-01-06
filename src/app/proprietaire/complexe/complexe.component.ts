import { Component,OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { StadeService } from 'src/app/services/stade.service';

import { Stade } from 'src/app/shared/stade';

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
