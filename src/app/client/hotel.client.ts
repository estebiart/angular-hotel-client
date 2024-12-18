import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelClient {
  constructor(private http: HttpClient) {}

  getHotelData(): Observable<any> {
    return this.http.get(environment.apiUrl + '/hoteles');
  }
}