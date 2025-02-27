import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodirectivesComponent } from './demodirectives.component';

describe('DemodirectivesComponent', () => {
  let component: DemodirectivesComponent;
  let fixture: ComponentFixture<DemodirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemodirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemodirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
