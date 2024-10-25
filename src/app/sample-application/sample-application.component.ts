import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-application',
  templateUrl: './sample-application.component.html',
  styles: ['p{letter-spacing:10px}']
})
export class SampleApplicationComponent {

isDisabled=true;
TwoWayDataBinding="";

onChanged(e:any){
  console.log(e.target.value);
}
}