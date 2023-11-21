import { Component } from '@angular/core';
import { SimpsonService } from '../services/simpson.service';
import { Calculate } from '../calculos/operacion';
import { re } from 'mathjs';

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
    const w = (x1 - x0) / seg;
    const w3 = (x1 - x0) / (3 * seg);
    let x: number[] = [];
    let mult = 1;
    let sum = 0;
    let ret = 0;
    for (let i = 0; i < seg + 1; i++) {
      if (i == 0) {
        x[i] = x0;
      } else {
        x[i] = x[i - 1] + w;
      }
      if (fx == 't') {
        ret =
          (this.gamma((dof + 1) / 2) /
            ((dof * Math.PI) ** 0.5 * this.gamma(dof / 2))) *
          (1 + x[i] ** 2 / dof) ** (((dof + 1) / 2) * -1);
      } else {
        ret = this.calculate.calcularOperacion(fx, x[i]);
      }
      if (i == seg || i == 0) {
        mult = 1;
      } else {
        if (i % 2 === 0) {
          mult = 2;
        } else {
          mult = 4;
        }
      }
      sum += mult * ret * w3;
    }
    this.result = sum;
    return sum;
  }

  gamma(g: number): number {
    if (Number.isInteger(g) && g >= 0) {
      return this.fac(g - 1);
    }
    let n = Math.sqrt(Math.PI);
    return this.gama(g, n);
  }

  gama(g: number, n: number): number {
    if (g <= 0.5) {
      return n;
    }
    return (g - 1) * this.gama(g - 1, n);
  }

  fac(g: number): number {
    if (g === 0) {
      return 1;
    } else {
      return g * this.fac(g - 1);
    }
  }


  x: string = '["1","3","2"]';
  myx: string[] = ['0'];
  result: number = 0;
  fx: string = '';
  dof: number = 0;
  x0: number = 0;
  x1: number = 0;
  seg: number = 0;
  error: number = 0;


  
  tipo: boolean = true;
  cSimpson() {
    this.tipo = true;
  }
  cTstudent() {
    this.tipo = false;
  }
  agregar() {
    let x = this.fx;
    let dof = this.dof;
    let x0 = this.x0;
    let x1 = this.x1;
    let seg = this.seg;
    let error = this.error;
    let r = this.calcularArea(x, dof, x0, x1, seg, error);
    this.result = r;
  }

}
