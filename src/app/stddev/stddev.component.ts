import { Component, OnInit } from '@angular/core';
import { MediasService } from '../services/medias.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit {
  proxySizeStdDev: number = 0;
  devHoursStdDev: number = 0;

  constructor(private mediasService: MediasService) {}

  ngOnInit() {
    this.calculateProxySizeStandardDeviation();
    this.calculateDevHoursStandardDeviation();
  }

  calculateProxySizeStandardDeviation() {
    this.mediasService.getProxySize().subscribe(data => {
      const mean = this.mediasService.calcularMedia(data);
      this.proxySizeStdDev = this.mediasService.calcularDesviacionEstandar(data, mean);
    });
  }

  calculateDevHoursStandardDeviation() {
    this.mediasService.getDevHours().subscribe(data => {
      const mean = this.mediasService.calcularMedia(data);
      this.devHoursStdDev = this.mediasService.calcularDesviacionEstandar(data, mean);
    });
  }
}
