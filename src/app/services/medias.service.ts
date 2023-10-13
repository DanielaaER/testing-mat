import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediasService {
  private apiURLProxySize = 'https://apidefinitiva-cv-service-jazaelog.cloud.okteto.net/columna1';
  private apiUrlDevHours = 'https://apidefinitiva-cv-service-jazaelog.cloud.okteto.net/columna2';

  constructor(private http: HttpClient) { }

  getProxySize(): Observable<number[]> {
    return this.http.get<{data: number[]}>(this.apiURLProxySize).pipe(
      map(response => response.data)
    );
  }

  getDevHours(): Observable<number[]> {
    return this.http.get<{data: number[]}>(this.apiUrlDevHours).pipe(
      map(response => response.data)
    );
  }
  calcularMedia(data: number[]): number {
    return data.reduce((acc, val) => acc + val, 0) / data.length;
  }

  calcularDesviacionEstandar(data: number[], mean: number): number {
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = this.calcularMedia(squaredDifferences);
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }
}