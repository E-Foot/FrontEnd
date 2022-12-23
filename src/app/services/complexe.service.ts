import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import {  Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Complexe } from '../shared/complexe';

@Injectable({
  providedIn: 'root'
})
export class ComplexeService {

  constructor(private http: HttpClient) { }
  getComplexes(): Observable<Complexe[]> {
    return this.http.get<Complexe[]>(baseURL + 'api/complexes').pipe(delay(500));
   }
   getComplexeById(id: number): Observable<Complexe>{
    return this.http.get<Complexe>(baseURL + 'api/complexe/'+id)
   }
}
