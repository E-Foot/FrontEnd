import { Component } from '@angular/core';
import {  OnInit,Inject } from '@angular/core';
import { StadeService } from '../services/stade.service';
import { baseURL } from '../shared/baseurl';
import { Stade } from '../shared/stade';

@Component({
  selector: 'app-stades',
  templateUrl: './stades.component.html',
  styleUrls: ['./stades.component.scss']
})
export class StadesComponent implements OnInit{
  stades: Stade[]
  constructor(private StadeService: StadeService, /*@Inject('baseURL') public baseURL*/)  { }


  ngOnInit(): void {

   this.StadeService.getStades().subscribe(stades => this.stades = stades );
   
   

  }

}
