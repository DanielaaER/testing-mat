// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { StddevComponent } from './stddev.component';
// import { MediasService } from '../services/medias.service';
// import { HttpClientModule } from '@angular/common/http';
// import { MediaComponent } from '../media/media.component';

// describe('StddevComponent', () => {
//   let component: StddevComponent;
//   let fixture: ComponentFixture<StddevComponent>;
//   let service: MediasService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MediasService, MediaComponent],
//       declarations: [StddevComponent],
//       imports: [HttpClientModule]
//     });
//     service = TestBed.inject(MediasService);
//     fixture = TestBed.createComponent(StddevComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediasService } from '../services/medias.service';
import { HttpClientModule } from '@angular/common/http';
import { MediaComponent } from '../media/media.component';
import { of } from 'rxjs';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let service: MediasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediasService, MediaComponent],
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
    const data = [10, 20, 30, 40, 50];
    const mean = 30;
  
    spyOn(service, 'getProxySize').and.returnValue(of(data));
    spyOn(component['mediaCommponent'], 'calcularMedia').and.returnValue(mean);
  
    component.calculateProxySizeStandardDeviation();
  
    expect(service.getProxySize).toHaveBeenCalled();
    expect(component['mediaCommponent'].calcularMedia).toHaveBeenCalledWith(data);
    expect(component.proxySizeStdDev).toEqual(component.calcularDesviacionEstandar(data, mean));
  });

  it('should calculate the standard deviation correctly for ProxySize', () => {
    const expectedStdDev = 542.6723136479325;

    component.proxySizeStdDev = expectedStdDev;

    expect(component.proxySizeStdDev).toEqual(expectedStdDev);
    const data = [10, 20, 30, 40, 50];
    const mean = 30;

    
    spyOn(service, 'getDevHours').and.returnValue(of(data));
    spyOn(component['mediaCommponent'], 'calcularMedia').and.returnValue(mean);
    

    component.calculateDevHoursStandardDeviation();
  
    expect(service.getDevHours).toHaveBeenCalled();
    expect(component['mediaCommponent'].calcularMedia).toHaveBeenCalledWith(data);
    expect(component.devHoursStdDev).toEqual(component.calcularDesviacionEstandar(data, mean));
 
  });


  
  it('should calculate the standard deviation correctly', () => {
    const data = [1, 2, 3, 4, 5];
    const mean = 3;
    const squaredDifferences = [4, 1, 0, 1, 4];
    const meanOfSquaredDifferences = 2;
    const stdDev = Math.sqrt(meanOfSquaredDifferences);

    spyOn(component['mediaCommponent'], 'calcularMedia').and.returnValue(meanOfSquaredDifferences);

    const result = component.calcularDesviacionEstandar(data, mean);

    expect(result).toEqual(stdDev);
    expect(component['mediaCommponent'].calcularMedia).toHaveBeenCalledWith(squaredDifferences);
  });
});