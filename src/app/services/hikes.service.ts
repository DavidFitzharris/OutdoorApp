import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HikesService {
  //Node express server
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  hikes(hikeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/hikeData`, hikeData);
  }
}
