import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoparentcomponentComponent } from './childtoparentcomponent.component';

describe('ChildtoparentcomponentComponent', () => {
  let component: ChildtoparentcomponentComponent;
  let fixture: ComponentFixture<ChildtoparentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildtoparentcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildtoparentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
