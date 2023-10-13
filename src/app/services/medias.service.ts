import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediasService {
  private apiURLProxySize = 'https://api-node-service-danielaaer.cloud.okteto.net/proxy';
  private apiUrlDevHours = 'https://api-node-service-danielaaer.cloud.okteto.net/dev';

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
 
}