import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-application';
  constructor(){
    throw new Error("Error from App Component"); //display throw error  +alret messiang  as alert
  }
  datafromchildvariable:any="";
  handleDatafromChild(value:string){
    this.datafromchildvariable = value;
    console.log(this.datafromchildvariable=value);
  }
}
