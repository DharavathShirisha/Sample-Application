import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycledemocomponent',
  templateUrl: './lifecycledemocomponent.component.html',
  styleUrls: ['./lifecycledemocomponent.component.css']
})
export class LifecycledemocomponentComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
  constructor(){
     console.log('constructor.');
  }
    textvalues="";
    ngOnInit():void{
      console.log('ngOnInit.');
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges.');
    }
    ngDoCheck(): void {
      console.log('ngDoCheck.');
  }
  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit.');
  }
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked.');
    }
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit.'); 
    }
    ngAfterViewChecked():void{
      console.log("AfterViewChecked."); 
    }
    ngOnDestroy(): void {
      console.log('ngOnDestroy.');
    }
}