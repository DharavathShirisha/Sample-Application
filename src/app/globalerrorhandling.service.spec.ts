import { TestBed } from '@angular/core/testing';

import { GlobalerrorhandlingService } from './globalerrorhandling.service';

describe('GlobalerrorhandlingService', () => {
  let service: GlobalerrorhandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalerrorhandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
