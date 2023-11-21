import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationComponent } from './correlation.component';
import { LinearRegressionService } from '../services/linear-regression.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LinearRegressionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9545 with the dataset Data_Test1', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_add: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(service, 'getTest1').and.returnValue(of(esperado));
    component.getData(1);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.9545, 4);
  });

  it('Should return r²=0.9111 with the dataset Data_Test1', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_add: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(service, 'getTest1').and.returnValue(of(esperado));
    component.getData(1);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.9111, 4);
  });

  it('Should return r=0.9333 with the dataset Data_Test2', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(service, 'getTest2').and.returnValue(of(esperado));
    component.getData(2);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.9333, 4);
  });

  it('Should return r²=0.8711 with the dataset Data_Test2', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(service, 'getTest2').and.returnValue(of(esperado));
    component.getData(2);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.8711, 4);
  });

  it('Should return r=0.9631 with the dataset Data_Test3', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(service, 'getTest3').and.returnValue(of(esperado));
    component.getData(3);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.9631, 4);
  });

  it('Should return r²=0.9276 with the dataset Data_Test3', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(service, 'getTest3').and.returnValue(of(esperado));
    component.getData(3);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.9276, 4);
  });

  it('Should return r=0.9480 with the dataset Data_Test4', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(service, 'getTest4').and.returnValue(of(esperado));
    component.getData(4);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.948, 4);
  });

  it('Should return r²=0.8988 with the dataset Data_Test4', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(service, 'getTest4').and.returnValue(of(esperado));
    component.getData(4);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.8988, 4);
  });
});



describe('regresion Lineal component', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LinearRegressionService);
    fixture.detectChanges();
  });

  
  const test1Data = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  };

  const test2Data = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_develop: [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ],
  };

  const test3Data = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  };

  const test4Data = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_develop: [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ],
  };

   

  it('should return B0 = -22.5525 with test1 json', () => {
    spyOn(service, 'getTest1').and.returnValue(of(test1Data));
    component.fetchDataForRoute(1);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-22.5525, 4);
  });

  it('should return y = 644.429 if x = 386 with test1 json', () => {
    spyOn(service, 'getTest1').and.returnValue(of(test1Data));
    component.fetchDataForRoute(1);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(644.429, 3);
  });

  it('should return B1 = 0.1681 with test2 JSON', () => {
    spyOn(service, 'getTest2').and.returnValue(of(test2Data));
    component.updateData(2);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(0.1681, 4);
  });

  it('should return B0 = -4.039 with test2 JSON', () => {
    spyOn(service, 'getTest2').and.returnValue(of(test2Data));
    component.updateData(2);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-4.039, 3);
  });

  it('should return y = 60.858 if x = 386 with2 test JSON', () => {
    spyOn(service, 'getTest2').and.returnValue(of(test2Data));
    component.updateData(2);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(60.858, 3);
  });

  it('should return B1 = 1.43097 with test3 JSON', () => {
    spyOn(service, 'getTest3').and.returnValue(of(test3Data));
    component.updateData(3);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(1.43097, 5);
  });

  it('should return B0 = -23.92 with test3 JSON', () => {
    spyOn(service, 'getTest3').and.returnValue(of(test3Data));
    component.updateData(3);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-23.92, 2);
  });

  it('should return y = 528.4294 if x = 386 with3 test JSON', () => {
    spyOn(service, 'getTest3').and.returnValue(of(test3Data));
    component.updateData(3);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(528.4294, 4);
  });

  it('should return B1 = 0.140164 with test4 JSON', () => {
    spyOn(service, 'getTest4').and.returnValue(of(test4Data));
    component.updateData(4);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(0.140164, 6);
  });

  it('should return B0 = -4.604 with test4 JSON', () => {
    spyOn(service, 'getTest4').and.returnValue(of(test4Data));
    component.updateData(4);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-4.604, 3);
  });

  it('should return y = 49.4994 if x = 386 with test4 JSON', () => {
    spyOn(service, 'getTest4').and.returnValue(of(test4Data));
    component.updateData(4);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(49.4994, 4);
  });
});








describe('input y agregarr', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LinearRegressionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('INPUT X', () => {
    it('Should set x model through ngModel', async () => {
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

  describe('BOTON AGREGGAR X', () => {
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

  // PRUEBAS DE X1

  describe('INPUT X1', () => {
    it('Should set x1 model through ngModel', async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="x1"]')
      ).nativeElement;

      // Act
      inputElement.value = '5';
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.x1).toEqual('5');
    });
  });

  //PRUEBAS BOTON AGREGAR

  describe('BOTON AGREGGAR X1', () => {
    it('Should render agregar in result agregar', () => {
      // Arrange
      component.x1 = '["2"]';

      // Act
      component.agregarx1();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('.x1'));
      let el: HTMLElement = de.nativeElement;

      //Assert
      expect(el.innerText).toBe('2');
    });

    it('Should agregar x1 when i click the agregar button ', () => {
      // Arrange
      component.x1 = '["5"]';
      let agregarButton = fixture.debugElement.query(
        By.css('.agregarx1-button')
      );

      // Act
      agregarButton.triggerEventHandler('click', null);

      // Assert
      expect(component.myx1).toEqual(['5']);
    });

    it('Should call agregarx1 method', () => {
      // Arrange
      let result;
      component.x1 = '["S"]';

      // Act
      component.agregarx1();
      result = component.myx1;

      // Assert
      expect(result).toEqual(['ingresa un array con numeros']);
    });
  });
});

// integrar correlacioin

describe('front correlacion', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LinearRegressionService);
    fixture.detectChanges();
  });

  describe('CORRELACION', () => {
  
    describe('BOTON corrleacion', () => {
      it('Should render result1 in result correlacion', () => {
        // Arrange
        component.myx = ['1', '2', '3'];
        component.myx1 = ['1', '2', '4'];
  
        // Act
        component.correlacion();
        fixture.detectChanges();
  
        const inputElement = fixture.debugElement.query(
          By.css('input[id="result"]')
        ).nativeElement;
        inputElement.value = component.result.toString();
        inputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
  
        // Assert
        expect(inputElement.value).toEqual('0.9819805060619657');
      });

      it('Should render result2 in result correlacion', () => {
        // Arrange
        component.myx = ['1', '2', '3'];
        component.myx1 = ['1', '2', '4'];
  
        // Act
        component.correlacion();
        fixture.detectChanges();
  
        const inputElement = fixture.debugElement.query(
          By.css('input[id="result2"]')
        ).nativeElement;
        inputElement.value = component.result.toString();
        inputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
  
        // Assert
        expect(inputElement.value).toEqual('0.9819805060619657');
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
  
      it('Should caclular correlacion cuando se hace button ', () => {
        // Arrange
        component.myx = ['1', '2', '3'];
        component.myx1 = ['1', '2', '3'];
        let mediaButton = fixture.debugElement.query(
          By.css('.correlacion-button')
        );
  
        // Act
        mediaButton.triggerEventHandler('click', null);
  
        // Assert
        expect(component.result).toBe(1);
      });
  
      it('Should call correlacion method', () => {
        // Arrange
        let result = 0;
        component.myx = ['1', '2', '3'];
        component.myx1 = ['1', '2', '3'];
  
        // Act
        component.correlacion();
        result = component.result;
  
        // Assert
        expect(result).toBe(1 );
      });
    });
    
  });
});









// integrar regresion

describe('front regresion', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LinearRegressionService);
    fixture.detectChanges();
  });

  describe('REGRESION', () => {
  
    describe('BOTON regresion', () => {
      it('Should render result in result regresion', () => {
        // Arrange
        component.myx = ['1', '2', '3','4'];
        component.myx1 = ['1', '2', '3','7'];
  
        // Act
        component.regresion();
        fixture.detectChanges();
  
        const inputElement = fixture.debugElement.query(
          By.css('input[id="result"]')
        ).nativeElement;
        inputElement.value = component.result.toString();
        inputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
  
        // Assert
        expect(inputElement.value).toEqual('1.9');
      });
      
      it('Should render result2 in result regresion', () => {
        // Arrange
        component.myx = ['1', '2', '3','4'];
        component.myx1 = ['1', '2', '3','7'];
  
        // Act
        component.regresion();
        fixture.detectChanges();
  
        const inputElement = fixture.debugElement.query(
          By.css('input[id="result2"]')
        ).nativeElement;
        inputElement.value = component.result.toString();
        inputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
  
        // Assert
        expect(inputElement.value).toEqual('1.9');
      });
      
      it('Should render result3 in result regresion', () => {
        // Arrange
        component.myx = ['1', '2', '3','4'];
        component.myx1 = ['1', '2', '3','7'];
  
        // Act
        component.regresion();
        fixture.detectChanges();
  
        const inputElement = fixture.debugElement.query(
          By.css('input[id="result3"]')
        ).nativeElement;
        inputElement.value = component.result.toString();
        inputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
  
        // Assert
        expect(inputElement.value).toEqual('1.9');
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
  
      it('Should caclular regresion cuando se hace button ', () => {
        // Arrange
        component.myx = ['1', '2', '3','4'];
        component.myx1 = ['1', '2', '3','7'];
        let mediaButton = fixture.debugElement.query(
          By.css('.regresion-button')
        );
  
        // Act
        mediaButton.triggerEventHandler('click', null);
  
        // Assert
        expect(component.result).toBe(1.9);
      });
  
      it('Should call regresion method', () => {
        // Arrange
        let result = 0;
        component.myx = ['1', '2', '3','4'];
        component.myx1 = ['1', '2', '3','7'];
  
        // Act
        component.regresion();
        result = component.result;
  
        // Assert
        expect(result).toBe(1.9);
      });
    });
    
  });
});