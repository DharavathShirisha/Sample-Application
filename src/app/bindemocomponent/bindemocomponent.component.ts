import { Component } from '@angular/core';

@Component({
  selector: 'app-bindemocomponent',
  templateUrl: './bindemocomponent.component.html',
  styleUrls: ['./bindemocomponent.component.css']
})
export class BindemocomponentComponent {
TwoWayDataBinding1="";
TwoWayDataBinding2="";

onChanged(e:any){
  console.log(e.target.value);
  }  
}
