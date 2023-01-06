import { Component,OnInit } from '@angular/core';
import { Stade } from 'src/app/shared/stade';
import { StadeService } from 'src/app/services/stade.service';
@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.scss']
})
export class StadeComponent implements OnInit{
  stades: Stade[]
  constructor(private StadeService: StadeService, /*@Inject('baseURL') public baseURL*/)  { }


  ngOnInit(): void {

   this.StadeService.getStadesByComplexeId(1).subscribe(stades => this.stades = stades );
   
   

  }


}
