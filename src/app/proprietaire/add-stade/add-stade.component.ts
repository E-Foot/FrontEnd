import { Component,ViewChild } from '@angular/core';
import { StadeService } from 'src/app/services/stade.service';

@Component({
  selector: 'app-add-stade',
  templateUrl: './add-stade.component.html',
  styleUrls: ['./add-stade.component.scss']
})
export class AddStadeComponent {

  constructor(stadeService:StadeService){}

  @ViewChild("jr") jrelem ;
  @ViewChild("duree") dureeElem ;
  @ViewChild("heure") heureElem ;
  @ViewChild("date") dateElem ;
  getValue() {} 

}
