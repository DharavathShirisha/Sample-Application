import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  styleUrls: ['./hostbinding.component.css']
})
export class HostbindingComponent {

  @HostBinding('style.color') color='blue';

  @HostBinding('style.letterSpacing') space='20px';
@HostListener('click') myclick(){
  this.space='10px';
}
}
