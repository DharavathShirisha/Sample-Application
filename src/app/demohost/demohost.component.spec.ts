import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemohostComponent } from './demohost.component';

describe('DemohostComponent', () => {
  let component: DemohostComponent;
  let fixture: ComponentFixture<DemohostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemohostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemohostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
