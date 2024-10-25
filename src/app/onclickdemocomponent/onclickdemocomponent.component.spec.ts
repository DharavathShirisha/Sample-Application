import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnclickdemocomponentComponent } from './onclickdemocomponent.component';

describe('OnclickdemocomponentComponent', () => {
  let component: OnclickdemocomponentComponent;
  let fixture: ComponentFixture<OnclickdemocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnclickdemocomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnclickdemocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
