import { Component } from '@angular/core';
import { SimpsonService } from '../services/simpson.service';
import { Calculate } from '../calculos/operacion';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'],
})
export class SimpsonComponent {
  // Inyecta el servicio SimpsonService y la clase Calculate en el constructor
  constructor(private simpsonService: SimpsonService, private calculator: Calculate) {}

  calcularArea(fx: any, x0: number, x1: number, seg: number, error: number): any {
    let previousResult = 0;
    let currentResult = 0;
    let iterations = 1;

    while (previousResult === 0 || currentResult - previousResult > error || currentResult === 0) {
      if (iterations === 1) {
        currentResult = this.simpsonIntegration(seg, fx, x0, x1);
      } else {
        if (currentResult !== 0) {
          previousResult = currentResult;
        }
        seg *= 2;
        currentResult = this.simpsonIntegration(seg, fx, x0, x1);
      }
      iterations += 1;
    }
    return currentResult;
  }

  simpsonIntegration(segmentos: any, fx: any, x0: any, x1: any) {
    const step = (x1 - x0) / segmentos;
    let sum = this.calculator.calcularOperacion(fx, x0);

    for (let i = 1; i < segmentos; i++) {
      const multiplier = i % 2 === 0 ? 2 : 4;
      sum += multiplier * this.calculator.calcularOperacion(fx, step * i + x0);
    }

    sum += this.calculator.calcularOperacion(fx, x1);
    return (step / 3) * sum;
  }
}
