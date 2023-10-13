import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { MediasService } from '../services/medias.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaComponent],
      providers: [MediasService],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediasService);
  });

  it('Should return mean=60.32 with the json 1a_dev_hours', () => {
    const devHoursData = [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(mediaService, 'getDevHours').and.returnValue(of(devHoursData));

    fixture.detectChanges(); 

    expect(component.devHoursAverage).toBeCloseTo(60.32, 2);
  });

  it('Should return mean=550.6 with the json 1a_proxy_size', () => {
    const proxySizeData = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(mediaService, 'getProxySize').and.returnValue(of(proxySizeData));

    fixture.detectChanges();

    expect(component.proxySizeAverage).toBeCloseTo(550.6, 1);
  });
});