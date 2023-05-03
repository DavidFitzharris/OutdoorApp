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

  //Setting hike data
  hikes(hikeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/hikeData`, hikeData);
  }

  //Get data back
  getHikingHistory(userEmail: string): Observable<any> {
    if (userEmail) {
      return this.http.get(`${this.apiUrl}/hikingHistory/${userEmail}`);
    } else {
      return null;
    }
  }

  //Deleting the hike data
  deleteHike(userEmail: string, hikeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteHike/${userEmail}/${hikeId}`);
  }

}
