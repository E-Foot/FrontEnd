import { Component } from '@angular/core';
import {  OnInit,Inject } from '@angular/core';
import { StadeService } from '../services/stade.service';
import { baseURL } from '../shared/baseurl';
import { Stade } from '../shared/stade';
import { ComplexeService } from '../services/complexe.service';
import { Complexe } from '../shared/complexe';

@Component({
  selector: 'app-us06',
  templateUrl: './us06.component.html',
  styleUrls: ['./us06.component.scss']
})
export class Us06Component implements OnInit{
  stades: Stade[]
  complexe: Complexe
  constructor(private StadeService: StadeService,private complexeService: ComplexeService,/*, @Inject('baseURL') public BaseURL*/)  { }


  ngOnInit(): void {

    const id = 2
    console.log(id)

    this.complexeService.getComplexeById(id).subscribe((complexe) => {
    this.complexe = complexe 
    this.complexe.listStades=complexe.listStades
      console.log(this.complexe);
   });

   this.StadeService.getStades().subscribe(stades => this.stades = stades);

  }

}
