import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  ////// PRUEBAS DE ISSUES /////

  it('Should return 16 if f(x)=2x, x0=1 x1=4', ()=>{
    expect(component.calcularArea('2x', 0, 4, 4, 0.00001)).toBeCloseTo(16.0,1);
  })

  it('Should return 0.333 if f(x)=x^2, x0=0 x1=1', ()=>{
    expect(component.calcularArea("x^2", 0, 1, 4, 0.0001)).toBeCloseTo(0.333,3);
  })

  it('Should return 1.38 in f(x)=1/x, x0=1, x1=4', ()=>{
    expect(component.calcularArea("1/x", 1, 4, 6, 0.001)).toBeCloseTo(1.386,3);
  })


});
