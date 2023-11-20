import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MediasService } from './medias.service';
import { of } from 'rxjs';

describe('MediasService', () => {
  let service: MediasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MediasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProxySize', () => {
    it('should return an Observable of number array', () => {
      const mockResponse = { data: [1, 2, 3] };

      spyOn(service['http'], 'get').and.returnValue(of(mockResponse));

      service.getProxySize().subscribe((result) => {
        expect(result).toEqual(mockResponse.data);
      });
    });
  });


  describe('detDevHoURS', () => {
    it('should return an Observable of number array', () => {
      const mockResponse = { data: [1, 2, 3] };

      spyOn(service['http'], 'get').and.returnValue(of(mockResponse));

      service.getDevHours().subscribe((result) => {
        expect(result).toEqual(mockResponse.data);
      });
    });
  });

});
