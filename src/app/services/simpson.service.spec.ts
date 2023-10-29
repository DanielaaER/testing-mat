import { TestBed } from '@angular/core/testing';

import { SimpsonService } from './simpson.service';

describe('SimpsonService', () => {
  let service: SimpsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
