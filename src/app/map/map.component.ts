import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent {
  latitude: number = 31.630000;
  longitude: number = -8.008889;
  locationChoosen = false;

  onChoseLocation(event){
    console.log(event)
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChoosen = true;
    console.log('lat '+this.latitude+'long '+this.longitude)
  }
}
