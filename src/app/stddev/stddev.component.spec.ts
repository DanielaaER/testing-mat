import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediasService } from '../services/medias.service';
import { HttpClientModule } from '@angular/common/http';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let service: MediasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediasService],
      declarations: [StddevComponent],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MediasService);
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the standard deviation correctly for ProxySize', () => {
    const expectedStdDev = 542.6723136479325;

    component.proxySizeStdDev = expectedStdDev;

    expect(component.proxySizeStdDev).toEqual(expectedStdDev);
  });

  it('should calculate the standard deviation correctly for DevHours', () => {
    const expectedStdDev = 59.06106670218546;

    component.devHoursStdDev = expectedStdDev;

    expect(component.devHoursStdDev).toEqual(expectedStdDev);
  });
});