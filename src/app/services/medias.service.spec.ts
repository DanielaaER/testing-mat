import { TestBed } from '@angular/core/testing';

import { MediasService } from './medias.service';

import { HttpClientModule } from '@angular/common/http';

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
});
