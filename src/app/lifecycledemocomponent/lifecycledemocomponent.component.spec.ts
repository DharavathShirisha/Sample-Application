import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycledemocomponentComponent } from './lifecycledemocomponent.component';

describe('LifecycledemocomponentComponent', () => {
  let component: LifecycledemocomponentComponent;
  let fixture: ComponentFixture<LifecycledemocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycledemocomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycledemocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
