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

  /////// PRUEBAS EXPERIMENTALES ///////

  it('Should return 100 in f(x)=-x-5, x0=0, x1=10', ()=>{
    expect(component.calcularArea("-x-5", 0, 10, 4, 0.001)).toBeCloseTo(100, 1);
  })

  it('Should return 25 in f(x)=x-5, x0=0, x1=5', ()=>{
    expect(component.calcularArea("x-5", 0, 10, 4, 0.001)).toBeCloseTo(25, 1);
  })

  it('Should return 25 in f(x)=-x+5, x0=0, x1=10', ()=>{
    expect(component.calcularArea("-x+5", 0, 10, 4, 0.001)).toBeCloseTo(25, 1);
  })

  it('Should return 25 in f(x)=X+2, x0=-2, x1=5', ()=>{
    expect(component.calcularArea("X+2", -3, 5, 4, 0.001)).toBeCloseTo(25, 0);
  })

  it('Should return Error in f(x)=Hola',()=>{
    expect(()=>{
        component.calcularArea("Hola", -3, 5, 4, 0.001)}).toThrow();
  })
  

});
