import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleApplicationComponent } from './sample-application.component';

describe('SampleApplicationComponent', () => {
  let component: SampleApplicationComponent;
  let fixture: ComponentFixture<SampleApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
