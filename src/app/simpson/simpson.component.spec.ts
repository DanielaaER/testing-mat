import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //simpson

  it('Should return 16 if f(x)=2x, x0=1 x1=4', () => {
    expect(component.calcularArea('2x', 0, 0, 4, 4, 0.00001)).toBeCloseTo(
      16.0,
      1
    );
  });

  it('Should return 0.333 if f(x)=x^2, x0=0 x1=1', () => {
    expect(component.calcularArea('x^2', 0, 0, 1, 4, 0.0001)).toBeCloseTo(
      0.333,
      3
    );
  });

  it('Should return 1.38 in f(x)=1/x, x0=1, x1=4', () => {
    expect(component.calcularArea('1/x', 0, 1, 4, 12, 0.001)).toBeCloseTo(
      1.386,
      3
    );
  });

  // prueba de gama

  it('should return correct gamma value for 5', () => {
    const z = 5;
    const result = component.gamma(z);
    expect(result).toBeCloseTo(24);
  });
  it('should return correct gamma value for 4.5', () => {
    const z = 4.5;

    // let n = Math.sqrt(Math.PI);
    const result = component.gamma(z);
    expect(result).toBeCloseTo(11.63);
  });

  //t stdudent

  it('should return the correct t-distribution probability for x=1.1 and dof=9 and should return p=0.35006', () => {
    const result = component.calcularArea('t', 9, 0, 1.1, 10, 0);
    expect(result).toBeCloseTo(0.35006, 5);
  });

  it('should return the correct t-distribution probability for x=1.1812 and dof=10 and should return p=0.36757', () => {
    const result = component.calcularArea('t', 10, 0, 1.1812, 20, 0);
    expect(result).toBeCloseTo(0.36757, 5);
  });

  it('should return the correct t-distribution probability for x=2.750 and dof=30 and should return p=0.49500', () => {
    const result = component.calcularArea('t', 30, 0, 2.75, 10, 0);
    expect(result).toBeCloseTo(0.495, 5);
  });
});

describe('botones SIMPSON', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('BUTTON SIMPSON y tstudent', () => {
    it('clic al boton simpson', async () => {
      // Arrange
      let agregarButton = fixture.debugElement.query(By.css('.simpson-button'));

      // Act
      agregarButton.triggerEventHandler('click', null);

      // Assert
      expect(component.tipo).toEqual(true);
    });

    it('clic al boton student', async () => {
      // Arrange
      let agregarButton = fixture.debugElement.query(
        By.css('.tstudent-button')
      );

      // Act
      agregarButton.triggerEventHandler('click', null);

      // Assert
      expect(component.tipo).toEqual(false);
    });
  });

  describe('INPUT FX', () => {
    it('Should set Fx model through ngModel', async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="fx"]')
      ).nativeElement;

      // Act
      inputElement.value = 'fx';
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.fx).toEqual('fx');
    });
  });

  describe('INPUT DOF', () => {
    it('Should set dof model through ngModel', async () => {
      // Arrange
      component.cTstudent();
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="dof"]')
      ).nativeElement;

      // Act
      inputElement.value = 5;
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.dof).toEqual(5);
    });
  });

  describe('INPUT X0', () => {
    it('Should set x0 model through ngModel', async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="x0"]')
      ).nativeElement;

      // Act
      inputElement.value = 5;
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.x0).toEqual(5);
    });
  });

  describe('INPUT X1', () => {
    it('Should set x1 model through ngModel', async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="x1"]')
      ).nativeElement;

      // Act
      inputElement.value = 5;
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.x1).toEqual(5);
    });
  });

  describe('INPUT SEG', () => {
    it('Should set seg model through ngModel', async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="seg"]')
      ).nativeElement;

      // Act
      inputElement.value = 5;
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.seg).toEqual(5);
    });
  });

  describe('INPUT ERROR', () => {
    it('Should set error model through ngModel', async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[id="error"]')
      ).nativeElement;

      // Act
      inputElement.value = 5;
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Assert
      expect(component.error).toEqual(5);
    });
  });
});

describe('FRONT SIMPSON', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render result1 in result simpson', () => {
    // Arrange
    let fx: string = 'x^2';
    let dof: number = 0;
    let x0: number = 0;
    let x1: number = 1;
    let seg: number = 4;
    let error: number = 0.0001;

    // Act
    component.calcularArea(fx, dof, x0, x1, seg, error);
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(
      By.css('input[id="result"]')
    ).nativeElement;
    inputElement.value = component.result.toString();
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(inputElement.value).toEqual('0.3333333333333333');
  });

  it('Should render result1 in result t student', () => {
    // Arrange
    let fx: string = 't';
    let dof: number = 3;
    let x0: number = 2;
    let x1: number = 1;
    let seg: number = 4;
    let error: number = 0.0001;

    // Act
    component.calcularArea(fx, dof, x0, x1, seg, error);
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(
      By.css('input[id="result"]')
    ).nativeElement;
    inputElement.value = component.result.toString();
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(inputElement.value).toEqual('-0.1258294127748641');
  });

  it('Should agregar x when i click the calcular button ', () => {
    // Arrange
    component.fx = 't';
    component.dof = 0;
    component.x0 = 0;
    component.x1 = 1;
    component.seg = 4;
    component.error = 0.0001;

    let agregarButton = fixture.debugElement.query(By.css('.calcular-button'));

    // Act
    agregarButton.triggerEventHandler('click', null);

    // Assert
    expect(component.fx).toEqual('t');
    expect(component.dof).toEqual(0);
    expect(component.x0).toEqual(0);
    expect(component.x1).toEqual(1);
    expect(component.seg).toEqual(4);
  });

  it('Should caclular simpson cuando se hace clic en calcular button ', () => {
    // Arrange
    component.fx = 'x^2';
    component.dof = 0;
    component.x0 = 0;
    component.x1 = 1;
    component.seg = 4;
    component.error = 0.0001;

    let mediaButton = fixture.debugElement.query(By.css('.calcular-button'));

    // Act
    mediaButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(0.3333333333333333);
  });

  it('Should caclular t student cuando se hace clic en calcular button ', () => {
    // Arrange
    component.fx = 't';
    let fx = 't';
    let dof = 5;
    let x0 = 2;
    let x1 = 1;
    let seg = 4;
    let error = 0.0001;

    let mediaButton = fixture.debugElement.query(By.css('.calcular-button'));

    // Act
    mediaButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(0);
  });

  it('Should call simpson method', () => {
    // Arrange
    let result = 0;
    component.fx = 'x^2';
    component.dof = 0;
    component.x0 = 0;
    component.x1 = 1;
    component.seg = 4;
    component.error = 0.0001;

    // Act
    component.calcularArea(
      component.fx,
      component.dof,
      component.x0,
      component.x1,
      component.seg,
      component.error
    );
    result = component.result;

    // Assert
    expect(result).toBe(0.3333333333333333);
  });

  it('Should call s student method', () => {
    // Arrange
    let result = 0;
    let fx = 't';
    let dof = 5;
    let x0 = 2;
    let x1 = 1;
    let seg = 4;
    let error = 0.0001;

    // Act
    component.calcularArea(fx, dof, x0, x1, seg, error);
    result = component.result;

    // Assert
    expect(result).toBe(-0.1306280925232825);
  });
});
