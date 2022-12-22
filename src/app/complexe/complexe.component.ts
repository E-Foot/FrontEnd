import { Component } from '@angular/core';

@Component({
  selector: 'app-complexe',
  templateUrl: './complexe.component.html',
  styleUrls: ['./complexe.component.scss']
})
export class ComplexeComponent {
  latitude: number = 31.630000;
  longitude: number = -8.008889;
  locationChoosen = false;

  onChoseLocation(event){
    console.log(event)
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChoosen = true;
  }
}
