import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){}

  @ViewChild('types_po') teams!: ElementRef;
	selectedTeam = '';
	onSelected():void {
		this.selectedTeam = this.teams.nativeElement.value;
    console.log(this.selectedTeam)
	}
  login(){
    if(this.selectedTeam == '1'){
      console.log("Prop")
      this.router.navigate(['/'])

    }if(this.selectedTeam === '2'){
      console.log("Pla")
    }
  }
  // onChange(value:string){
  //   console.log(value)
  // }
  // onChange(element: HTMLSelectElement){
  //   console.log(element.value)
  // }

}
