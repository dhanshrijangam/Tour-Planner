import { TestBed } from '@angular/core/testing';

import { TourResolveServiceService } from './tour-resolve-service.service';

describe('TourResolveServiceService', () => {
  let service: TourResolveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourResolveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
