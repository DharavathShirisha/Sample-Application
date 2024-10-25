import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowextensionComponent } from './showextension.component';

describe('ShowextensionComponent', () => {
  let component: ShowextensionComponent;
  let fixture: ComponentFixture<ShowextensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowextensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowextensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
