import { Component } from '@angular/core';

@Component({
  selector: 'app-mouseevent',
  templateUrl: './mouseevent.component.html',
  styleUrls: ['./mouseevent.component.css']
})
export class MouseeventComponent {
    isExpanded = false;
    text = 'Hover over me!';
  
    expandText() {
      this.isExpanded = true;
      this.text = 'Text Expanded!';
    }
  
    shrinkText() {
      this.isExpanded = false;
      this.text = 'Hover over me!';
    }
  
   Expanded={
    
    color:'red',
    letterspacing:'normal',
    
    
  
  }
}
