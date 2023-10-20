import { Component, OnInit } from '@angular/core';
import { LinearRegressionService } from '../services/linear-regression.service';
import { Calculate } from '../calculos/operacion';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent implements OnInit {
  constructor(private linearRegressionService: LinearRegressionService) { }

  lista1: number[] = [];
  lista2: number[] = [];
  selectedRouteNumber: number = 1;

  sumX = 0;
  sumY = 0;
  mediaX = 0
  mediaY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  n = 0;

  calculate = new Calculate();

  ngOnInit(): void {
    this.fetchDataForRoute(this.selectedRouteNumber);
  }

  fetchDataForRoute(routeNumber: number): void {
    switch (routeNumber) {
      case 1:
        this.linearRegressionService.getTest1().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 2:
        this.linearRegressionService.getTest2().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
      case 3:
        this.linearRegressionService.getTest3().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 4:
        this.linearRegressionService.getTest4().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
      default:
        console.error('Número de ruta no válido');
    }
  }
  handleDataResponse(data: any): void {
    this.sumX = this.calculate.sumX(this.lista1);
    this.sumY = this.calculate.sumX(this.lista2);
    this.mediaX = this.calculate.calculateMedia(this.lista1);
    this.mediaY = this.calculate.calculateMedia(this.lista2);

    this.sumXY = this.calculate.sumXY(this.lista1, this.lista2);
    this.sumXX = this.calculate.sumXX(this.lista1);
    this.sumYY = this.calculate.sumXX(this.lista2);
    this.n = this.lista1.length;
  }

  updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  }

  calculateB1(): number {
    var b1 = 0;
    b1 = this.calculate.calculateB1(this.sumXY, this.sumX, this.sumY, this.sumXX, this.n);
    return b1;
  }

  calculateB0(): number {
    var b0 = 0;
    b0 = this.calculate.calculateB0(this.sumX, this.sumY, this.calculateB1(), this.n);
    return b0;
  }

  calculateY(x: number): number {
    var y = 0;
    y = this.calculate.calculateY(this.calculateB0(), this.calculateB1(), x);
    return y;
  }
}