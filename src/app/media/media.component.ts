import { Component, OnInit } from '@angular/core';
import { MediasService } from '../services/medias.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
})
export class MediaComponent implements OnInit {
  devHoursAverage = 0;
  proxySizeAverage = 0;
  constructor(private MediasService: MediasService) {}

  calcularMedia(data: number[]): number {
    return data.reduce((acc, val) => acc + val, 0) / data.length;
  }
  proxySizeStdDev: number = 0;
  devHoursStdDev: number = 0;

  calcularDesviacionEstandar(data: number[], mean: number): number {
    const squaredDifferences = data.map((val) => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = this.calcularMedia(squaredDifferences);
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }

  calculateProxySizeStandardDeviation() {
    this.MediasService.getProxySize().subscribe((data) => {
      const mean = this.calcularMedia(data);
      this.proxySizeStdDev = this.calcularDesviacionEstandar(data, mean);
    });
  }

  calculateDevHoursStandardDeviation() {
    this.MediasService.getDevHours().subscribe((data) => {
      const mean = this.calcularMedia(data);
      this.devHoursStdDev = this.calcularDesviacionEstandar(data, mean);
    });
  }

  ngOnInit(): void {
    this.MediasService.getDevHours().subscribe((data) => {
      this.devHoursAverage = this.calcularMedia(data);
    });

    this.MediasService.getProxySize().subscribe((data) => {
      this.proxySizeAverage = this.calcularMedia(data);
    });

    this.calculateProxySizeStandardDeviation();
    this.calculateDevHoursStandardDeviation();
  }

  x: string = '["1","3","2"]';
  myx: string[] = ['0'];
  result: number = 0;
  agregar() {
    const numbers = JSON.parse(this.x);
    const isValidArray =
      Array.isArray(numbers) && numbers.every((num) => !isNaN(Number(num)));

    if (isValidArray) {
      this.myx = numbers;
    } else {
      this.myx = ['ingresa un array con numeros'];
    }
  }

  media() {
    const numbers = this.myx.map(Number);
    const mean = this.calcularMedia(numbers);
    this.result = mean;
  }

  desviacion() {
    const numbers = this.myx.map(Number);
    const mean = this.calcularMedia(numbers);
    const result = this.calcularDesviacionEstandar(numbers, mean);
    this.result = result;
  }
}
