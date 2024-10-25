import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindemocomponentComponent } from './bindemocomponent.component';

describe('BindemocomponentComponent', () => {
  let component: BindemocomponentComponent;
  let fixture: ComponentFixture<BindemocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindemocomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindemocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
