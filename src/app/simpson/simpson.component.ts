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
    x0: number,
    x1: number,
    seg: number,
    error: number
  ): any {
    if (x0 > x1) {
      let temp = x0;
      x0 = x1;
      x1 = temp;
    }

    return this.calcular(fx, x0, x1, seg, error);
  }
  calcular(fx: any, x0: number, x1: number, seg: number, error: number) {
    if (fx[0] == 0 || x1 == 0) {
      return 0;
    } else {
      let area1 = 0;
      let area2 = 0;
      let contador = 1;
      while (area1 == 0 || area2 - area1 > error || area2 == 0) {
        if (contador == 1) {
          area1 = this.simpson(seg, fx, x0, x1);
        } else {
          if (area2 != 0) {
            area1 = area2;
          }
          seg *= 2;
          area2 = this.simpson(seg, fx, x0, x1);
        }
        contador += 1;
      }
      return area2;
    }
  }

  simpson(segmentos: any, fx: any, x0: any, x1: any) {
    let w = (x1 - x0) / segmentos;
    let multiplo = 0;
    var cal = this.calculate.calcularOperacion(fx, x0);
    let suma = x0 == 0 ? 0 : (cal *= cal < 0 ? -1 : 1);
    for (let i = 1; i <= segmentos; i++) {
      if (i == segmentos) {
        suma += this.calculate.calcularOperacion(fx, x1);
      } else {
        if (i % 2 != 0) {
          multiplo = 4;
        } else {
          multiplo = 2;
        }
        cal = this.calculate.calcularOperacion(fx, w * i + x0);
        if (cal < 0) {
          cal *= -1;
        }
        suma += multiplo * cal;
      }
    }
    return (w / 3) * suma;
  }
}
