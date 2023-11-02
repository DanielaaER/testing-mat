import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent],
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
    expect(component.calcularArea('1/x', 0, 1, 4, 6, 0.001)).toBeCloseTo(
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
