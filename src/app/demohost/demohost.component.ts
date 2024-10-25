import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-demohost',
  templateUrl: './demohost.component.html',
  styleUrls: ['./demohost.component.css']
})
export class DemohostComponent {
@HostListener('mouseenter')onMouseEnter(){
  console.log('host had been entered by the mouse !')
}
}
