import { Component } from '@angular/core';
import { SimpsonService } from '../services/simpson.service';
import { Calculate } from '../calculos/operacion';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'],
})
export class SimpsonComponent {
  calculate = new Calculate();

  calcularArea(
    fx: any,
    dof: number,
    x0: number,
    x1: number,
    seg: number,
    error: number
  ): any {
    if (fx == 't') {
      console.log('calcular t');
      return this.tDistribution(x0, x1, dof, seg);
    } else {
      let a1 = 0;
      let a2 = 0;
      let c = 1;
      while (a1 == 0 || a2 - a1 > error || a2 == 0) {
        if (c == 1) {
          a1 = this.simpson(seg, fx, x0, x1);
        } else {
          if (a2 != 0) {
            a1 = a2;
          }
          seg *= 2;
          a2 = this.simpson(seg, fx, x0, x1);
        }
        c += 1;
      }
      return a2;
    }
  }

  simpson(segmentos: any, fx: any, x0: any, x1: any) {
    const w = (x1 - x0) / segmentos;
    let suma = this.calculate.calcularOperacion(fx, x0);
    for (let i = 1; i < segmentos; i++) {
      const multiplo = i % 2 === 0 ? 2 : 4;
      suma += multiplo * this.calculate.calcularOperacion(fx, w * i + x0);
    }
    suma += this.calculate.calcularOperacion(fx, x1);
    return (w / 3) * suma;
  }

  gamma(z: number): number {
    const g = 7;
    const p = [
      0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
    ];
    if (z < 0.5) {
      return Math.PI / (Math.sin(Math.PI * z) * this.gamma(1 - z));
    } else {
      z -= 1;
      let x = p[0];
      for (let i = 1; i < g + 2; i++) {
        x += p[i] / (z + i);
      }
      let t = z + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
    }
  }

  tDistribution(x0: any, x1: any, dof: number, seg: number): number {
    //obtener w
    const w = (x1 - x0) / seg;
    const w3 = (x1 - x0) / (3 * seg);
    let x = [];
    let p1 = [];
    let p2 = [];
    let cons = this.gamma((dof + 1) / 2) / (((dof * Math.PI) ** 0.5) * this.gamma(dof / 2));

    let fx = [];
    let mult = [];
    let sum = 0;
    let termino = 0;
    x[0] = 0;
    p1[0] = 1;
    p2[0] = 1;
    fx[0] = cons * p2[0];
    mult[0] = 1;
    termino = mult[0] * fx[0] * w3;
    
    console.log(termino);
    sum = termino;
    
    for (let i = 1; i < seg+1; i++) {
      x[i] = x[i - 1] + w;
      p1[i] = 1 + x[i] ** 2 / dof;
      p2[i] = p1[i] ** (((dof + 1) / 2) * -1);
      fx[i] = cons * p2[i];
      if (i == seg) {
        mult[i] = 1;
      } else {
        if (i % 2 === 0) {
          mult[i] = 2;
        } else {
          mult[i] = 4;
        }
      }
      termino = mult[i] * fx[i] * w3;
      console.log(termino);
      sum = sum + termino;
    }
    
    return sum;
    // return mult[10] ;
    // return mult[9] * fx[9] * w3;
    // return fx[0];

    
  }
}
