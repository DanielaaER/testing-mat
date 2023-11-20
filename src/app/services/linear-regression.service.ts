import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class LinearRegressionService {

  test1 = 'https://apidefinitiva-cv-service-jazaelog.cloud.okteto.net/test1';
  test2 = 'https://apidefinitiva-cv-service-jazaelog.cloud.okteto.net/test2';
  test3 = 'https://apidefinitiva-cv-service-jazaelog.cloud.okteto.net/test3';
  test4 = 'https://apidefinitiva-cv-service-jazaelog.cloud.okteto.net/test4';


  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTest1(): Observable<any> {
    return this.http
      .get<any>(this.test1, this.httpOptions)
      .pipe(retry(1));
  }

  getTest2(): Observable<any> {
    return this.http
      .get<any>(this.test2, this.httpOptions)
      .pipe(retry(1));
  }

  getTest3(): Observable<any> {
    return this.http
      .get<any>(this.test3, this.httpOptions)
      .pipe(retry(1));
  }

  getTest4(): Observable<any> {
    return this.http
      .get<any>(this.test4, this.httpOptions)
      .pipe(retry(1));
  }
}
