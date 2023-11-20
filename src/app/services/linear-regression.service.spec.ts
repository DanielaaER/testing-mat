import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { LinearRegressionService } from './linear-regression.service';
import { throwError } from 'rxjs';

describe('LinearRegressionService', () => {
  let service: LinearRegressionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LinearRegressionService],
    });
    service = TestBed.inject(LinearRegressionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to test1 endpoint', () => {
    const testData = { data: 'test1' };

    service.getTest1().subscribe((response) => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne(service.test1);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should make a GET request to test2 endpoint', () => {
    const testData = { data: 'test2' };

    service.getTest2().subscribe((response) => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne(service.test2);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should make a GET request to test3 endpoint', () => {
    const testData = { data: 'test3' };

    service.getTest3().subscribe((response) => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne(service.test3);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should make a GET request to test4 endpoint', () => {
    const testData = { data: 'test4' };

    service.getTest4().subscribe((response) => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne(service.test4);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

});
