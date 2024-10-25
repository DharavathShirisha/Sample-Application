import { Component } from '@angular/core';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent {
condition:boolean=true;
count:number=6;
continents:string[]=["Asia","Australia","Africa","Europe","Antartica","America"];
num = 2; 
paraStyle:any={
  color:'red',
  letterspacing:'10px'

}
}