import { Component } from '@angular/core';
import {  OnInit,Inject } from '@angular/core';
import { StadeService } from '../services/stade.service';
import { baseURL } from '../shared/baseurl';
import { Stade } from '../shared/stade';

@Component({
  selector: 'app-us06',
  templateUrl: './us06.component.html',
  styleUrls: ['./us06.component.scss']
})
export class Us06Component implements OnInit{
  stades: Stade[]
  constructor(private StadeService: StadeService/*, @Inject('baseURL') public BaseURL*/)  { }


  ngOnInit(): void {

   this.StadeService.getStades().subscribe(stades => this.stades = stades);

  }

}
