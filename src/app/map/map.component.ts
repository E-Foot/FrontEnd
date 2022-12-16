import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  styles: [`
    agm-map {
    height: 300px;
    }
  `],
})
export class MapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
