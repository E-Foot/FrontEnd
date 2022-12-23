import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ComplexeService } from '../services/complexe.service';
import { Complexe } from '../shared/complexe';

@Component({
  selector: 'app-complexe',
  templateUrl: './complexe.component.html',
  styleUrls: ['./complexe.component.scss']
})

export class ComplexeComponent implements OnInit{
  complexe: Complexe
  id: number;


  constructor(private complexeService: ComplexeService,private route: ActivatedRoute, private location: Location)
  {}

  ngOnInit(): void  {
    const id = this.route.snapshot.params['id'];
    console.log(id)

    this.complexeService.getComplexeById(id).subscribe((complexe) => {
    this.complexe = complexe 
    this.complexe.listStades=complexe.listStades
      console.log(this.complexe);
   });

  }

  latitude: number = 31.630000;
  longitude: number = -8.008889;
  locationChoosen = false;

  onChoseLocation(event){
    console.log(event)
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChoosen = true;
  }
  onChoseLocation(event){
    console.log(event)
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChoosen = true;
  }
}
