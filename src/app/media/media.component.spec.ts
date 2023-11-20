import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { MediasService } from '../services/medias.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaComponent],
      providers: [MediasService],
      imports: [HttpClientModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediasService);
  });

  //MEDIA

  describe('MEDIA', () => {
    it('Should return mean=60.32 with the json 1a_dev_hours', () => {
      const devHoursData = [
        15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ];
      spyOn(mediaService, 'getDevHours').and.returnValue(of(devHoursData));

      fixture.detectChanges();

      expect(component.devHoursAverage).toBeCloseTo(60.32, 2);
    });

    it('Should return mean=550.6 with the json 1a_proxy_size', () => {
      const proxySizeData = [
        160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
      ];
      spyOn(mediaService, 'getProxySize').and.returnValue(of(proxySizeData));

      fixture.detectChanges();

      expect(component.proxySizeAverage).toBeCloseTo(550.6, 1);
    });
  });

  //INTEGRACION

  //INPPUT 1

  describe('INPUT', () => {
    it('Should set x1 model through ngModel', async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="x"]')
      ).nativeElement;

      // Act
      inputElement.value = '5';
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.x).toEqual('5');
    });
  });

  //PRUEBAS BOTON AGREGAR

  describe('BOTON AGREGGAR', () => {
    it('Should render agregar in result agregar', () => {
      // Arrange
      component.x = '["2"]';

      // Act
      component.agregar();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('.x'));
      let el: HTMLElement = de.nativeElement;

      //Assert
      expect(el.innerText).toBe('2');
    });

    it('Should agregar x when i click the agregar button ', () => {
      // Arrange
      component.x = '["5"]';
      let agregarButton = fixture.debugElement.query(By.css('.agregar-button'));

      // Act
      agregarButton.triggerEventHandler('click', null);

      // Assert
      expect(component.myx).toEqual(['5']);
    });

    it('Should call agregar method', () => {
      // Arrange
      let result;
      component.x = '["S"]';

      // Act
      component.agregar();
      result = component.myx;

      // Assert
      expect(result).toEqual(['ingresa un array con numeros']);
    });
  });

  //PRUEBAS BOTON MEDIA

  describe('BOTON MEDIA', () => {
    it('Should render result in result media', () => {
      // Arrange
      component.myx = ['1', '2', '3'];

      // Act
      component.media();
      fixture.detectChanges();

      const inputElement = fixture.debugElement.query(
        By.css('input[id="result"]')
      ).nativeElement;
      inputElement.value = component.result.toString();
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(inputElement.value).toEqual('2');
    });

    it('Should agregar x when i click the agregar button ', () => {
      // Arrange
      component.x = '["5"]';
      let agregarButton = fixture.debugElement.query(By.css('.agregar-button'));

      // Act
      agregarButton.triggerEventHandler('click', null);

      // Assert
      expect(component.myx).toEqual(['5']);
    });

    it('Should caclular media cuando se hace button ', () => {
      // Arrange
      component.myx = ['1', '2', '3'];
      let mediaButton = fixture.debugElement.query(By.css('.media-button'));

      // Act
      mediaButton.triggerEventHandler('click', null);

      // Assert
      expect(component.result).toBe(2);
    });

    it('Should call media method', () => {
      // Arrange
      let result = 0;
      component.myx = ['1', '2', '3'];

      // Act
      component.media();
      result = component.result;

      // Assert
      expect(result).toBe(2);
    });
  });

  //PRUEBAS BOTON DESVIACION

  describe('BOTON DESVIACION', () => {
    it('Should render result in result desviacion', () => {
      // Arrange
      component.myx = ['1', '2', '3'];

      // Act
      component.desviacion();
      fixture.detectChanges();

      const inputElement = fixture.debugElement.query(
        By.css('input[id="result"]')
      ).nativeElement;
      inputElement.value = component.result.toString();
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(inputElement.value).toEqual('0.816496580927726');
    });

    it('Should agregar x when i click the agregar button ', () => {
      // Arrange
      component.x = '["5"]';
      let agregarButton = fixture.debugElement.query(By.css('.agregar-button'));

      // Act
      agregarButton.triggerEventHandler('click', null);

      // Assert
      expect(component.myx).toEqual(['5']);
    });

    it('Should caclular desviacion cuando se hace button ', () => {
      // Arrange
      component.myx = ['1', '2', '3'];
      let mediaButton = fixture.debugElement.query(
        By.css('.desviacion-button')
      );

      // Act
      mediaButton.triggerEventHandler('click', null);

      // Assert
      expect(component.result).toBe(0.816496580927726);
    });

    it('Should call desviacions method', () => {
      // Arrange
      let result = 0;
      component.myx = ['1', '2', '3'];

      // Act
      component.desviacion();
      result = component.result;

      // Assert
      expect(result).toBe(0.816496580927726 );
    });
  });
});

describe('StddevComponent', () => {
  let service: MediasService;

  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaComponent],
      providers: [MediasService],
      imports: [HttpClientModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediasService);
  });

  it('should calculate the standard deviation correctly for ProxySize', () => {
    const expectedStdDev = 542.6723136479325;

    component.proxySizeStdDev = expectedStdDev;

    expect(component.proxySizeStdDev).toEqual(expectedStdDev);
    const data = [10, 20, 30, 40, 50];
    const mean = 30;

    spyOn(mediaService, 'getProxySize').and.returnValue(of(data));
    spyOn(component, 'calcularMedia').and.returnValue(mean);

    component.calculateProxySizeStandardDeviation();

    expect(mediaService.getProxySize).toHaveBeenCalled();

    expect(component.calcularMedia).toHaveBeenCalledWith(data);
    expect(component.proxySizeStdDev).toEqual(
      component.calcularDesviacionEstandar(data, mean)
    );
  });

  it('should calculate the standard deviation correctly', () => {
    const data = [1, 2, 3, 4, 5];
    const mean = 3;
    const squaredDifferences = [4, 1, 0, 1, 4];
    const meanOfSquaredDifferences = 2;
    const stdDev = Math.sqrt(meanOfSquaredDifferences);

    spyOn(component, 'calcularMedia').and.returnValue(meanOfSquaredDifferences);
    const result = component.calcularDesviacionEstandar(data, mean);

    expect(result).toEqual(stdDev);
    expect(component.calcularMedia).toHaveBeenCalledWith(squaredDifferences);
  });
});
