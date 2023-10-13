import { Component, OnInit } from '@angular/core';
import { MediasService } from '../services/medias.service';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit {
  proxySizeStdDev: number = 0;
  devHoursStdDev: number = 0;

  constructor(private mediasService: MediasService, private mediaCommponent: MediaComponent) {}

  calcularDesviacionEstandar(data: number[], mean: number): number {
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = this.mediaCommponent.calcularMedia(squaredDifferences);
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }
  
  ngOnInit() {
    this.calculateProxySizeStandardDeviation();
    this.calculateDevHoursStandardDeviation();
  }

  calculateProxySizeStandardDeviation() {
    this.mediasService.getProxySize().subscribe(data => {
      const mean = this.mediaCommponent.calcularMedia(data);
      this.proxySizeStdDev = this.calcularDesviacionEstandar(data, mean);
    });
  }

  calculateDevHoursStandardDeviation() {
    this.mediasService.getDevHours().subscribe(data => {
      const mean = this.mediaCommponent.calcularMedia(data);
      this.devHoursStdDev = this.calcularDesviacionEstandar(data, mean);
    });
  }
}
