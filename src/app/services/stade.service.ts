import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Stade } from '../shared/stade';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {  catchError} from 'rxjs/operators';
import {  HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class StadeService {

  constructor(private http: HttpClient) { }

  
  getStades(): Observable<Stade[]> {
    return this.http.get<Stade[]>(baseURL + 'api/stades');
   }
   getStadeById(id: number): Observable<Stade>{
    return this.http.get<Stade>(baseURL + 'api/stade/'+id)
   }
   getStadesById(id: number): Observable<any>{
    return this.http.get(baseURL + 'api/stade/'+id)
   }

}
