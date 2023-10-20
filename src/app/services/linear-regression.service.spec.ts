import { TestBed } from '@angular/core/testing';

import { LinearRegressionService } from './linear-regression.service';
import { HttpClientModule } from '@angular/common/http';

describe('LinearRegressionService', () => {
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LinearRegressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
