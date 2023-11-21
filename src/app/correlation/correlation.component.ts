import { Component, OnInit } from '@angular/core';
import { Calculate } from '../calculos/operacion';
import { LinearRegressionService } from '../services/linear-regression.service';
import { number } from 'mathjs';
@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css'],
})
export class CorrelationComponent implements OnInit {
  constructor(private service: LinearRegressionService) {}

  sumaXY = 0;
  sumaX = 0;
  sumaY = 0;
  sumaXCuadrada = 0;
  sumaYCuadrada = 0;
  n = 0;

  calculate = new Calculate();
  calculos() {
    if (this.cx.length == this.cy.length && this.cx.length != 0) {
      this.n = this.cx.length;
      this.sumaX = this.calculate.sumX(this.cx);
      this.sumaY = this.calculate.sumX(this.cy);
      this.sumaXY = this.calculate.sumXY(this.cx, this.cy);
      this.sumaXCuadrada = this.calculate.sumXX(this.cx);
      this.sumaYCuadrada = this.calculate.sumXX(this.cy);
    }
  }

  getData(option: number) {
    switch (option) {
      case 1:
        this.service.getTest1().subscribe((data) => {
          this.cx = data.proxy_size;
          this.cy = data.actual_add;
        });
        break;
      case 2:
        this.service.getTest2().subscribe((data) => {
          this.cx = data.proxy_size;
          this.cy = data.actual_develop;
        });
        break;
      case 3:
        this.service.getTest3().subscribe((data) => {
          this.cx = data.plan_added;
          this.cy = data.actual_added;
        });
        break;
      case 4:
        this.service.getTest4().subscribe((data) => {
          this.cx = data.plan_added;
          this.cy = data.actual_develop;
        });
        break;
    }
  }

  calculateR(): number {
    let r =
      (this.n * this.sumaXY - this.sumaX * this.sumaY) /
      Math.sqrt(
        (this.n * this.sumaXCuadrada - Math.pow(this.sumaX, 2)) *
          (this.n * this.sumaYCuadrada - Math.pow(this.sumaY, 2))
      );
    return r;
  }

  calculateRCuadrada(): number {
    let r = this.calculateR();
    return r * r;
  }

  lista1: number[] = [];
  lista2: number[] = [];
  selectedRouteNumber: number = 1;

  sumX = 0;
  sumY = 0;
  mediaX = 0;
  mediaY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;

  ngOnInit(): void {
    this.fetchDataForRoute(this.selectedRouteNumber);
  }
  fetchDataForRoute(routeNumber: number): void {
    switch (routeNumber) {
      case 1:
        this.service.getTest1().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 2:
        this.service.getTest2().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
      case 3:
        this.service.getTest3().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 4:
        this.service.getTest4().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
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
    b1 = this.calculate.calculateB1(
      this.sumXY,
      this.sumX,
      this.sumY,
      this.sumXX,
      this.n
    );
    return b1;
  }

  calculateB0(): number {
    var b0 = 0;
    b0 = this.calculate.calculateB0(
      this.sumX,
      this.sumY,
      this.calculateB1(),
      this.n
    );
    return b0;
  }

  calculateY(x: number): number {
    var y = 0;
    y = this.calculate.calculateY(this.calculateB0(), this.calculateB1(), x);
    return y;
  }

  x: string = '["1","3","2"]';
  myx: string[] = ['0'];
  x1: string = '["1","3","2"]';
  myx1: string[] = ['0'];
  result: number = 0;
  result2: number = 0;
  result3: number = 0;
  showR3: boolean = false;

  cx: number[] = [];
  cy: number[] = [];
  data = {
    x: this.cx,
    y: this.cy,
  };
  y: number = 0;

  r1="resultado";
  r2="resultado";
  r3="resultado";
  agregar() {
    const numbers = JSON.parse(this.x);
    const isValidArray =
      Array.isArray(numbers) && numbers.every((num) => !isNaN(Number(num)));

    if (isValidArray) {
      this.myx = numbers;
    } else {
      this.myx = ['ingresa un array con numeros'];
    }

    this.cx = numbers;
  }

  agregarx1() {
    const numbers = JSON.parse(this.x1);
    const isValidArray =
      Array.isArray(numbers) && numbers.every((num) => !isNaN(Number(num)));

    if (isValidArray) {
      this.myx1 = numbers;
    } else {
      this.myx1 = ['ingresa un array con numeros'];
    }
    this.cy = numbers;
  }

  correlacion() {
    this.cx = this.myx.map(Number);
    this.cy = this.myx1.map(Number);
    this.calculos();
    this.result = this.calculateR();
    this.result2 = this.calculateRCuadrada();
    this.r1 = "r";
    this.r2 = "r cuadrada";
  }

  regresion() {
    this.cx = this.myx.map(Number);
    this.cy = this.myx1.map(Number);
    this.data.x = this.cx;
    this.data.y = this.cy;
    this.lista1 = this.cx;
    this.lista2 = this.cy;
    this.handleDataResponse(this.data);
    this.result = this.calculateB1();
    this.result2 = this.calculateB0();
    this.result3 = this.calculateY(1);
    this.r1 = "b1";
    this.r2 = "b0";
    this.r3 = "y";
    this.showR3 = true;
  }
}
