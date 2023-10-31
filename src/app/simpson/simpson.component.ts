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
  calcularArea(fx: any, x0: number, x1: number, seg: number, error: number): any {
    
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
}