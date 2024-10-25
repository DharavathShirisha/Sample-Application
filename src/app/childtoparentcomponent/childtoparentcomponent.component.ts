//import {Component, Output, EventEmitter} from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-childtoparentcomponent',
  templateUrl: './childtoparentcomponent.component.html',
  styleUrls: ['./childtoparentcomponent.component.css']
})
export class ChildtoparentcomponentComponent {
 @Output() parentEvent = new EventEmitter<string>();  //EventEmitter is a typestring we should match with parent event
handleChange(e:any){
this.parentEvent.emit(e.target.value);
}
}
