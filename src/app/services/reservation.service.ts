import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Stade } from '../shared/stade';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {  catchError} from 'rxjs/operators';
import {  HttpHeaders } from '@angular/common/http';
import { Reservation } from '../shared/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  putReservation(reservation: Reservation,/*stade:Stade*/): Observable <Reservation> {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json'
      })
    }; 
    var res=JSON.stringify(reservation); 
    console.log(res);
    return this.http.post<Reservation>(baseURL + 'api/reservations/save' , reservation, httpOptions)
}

  getAnnonces(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(baseURL + 'api/annonces');
 }

}
