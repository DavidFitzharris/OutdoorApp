import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    //Node express server
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  //  //For use in server
  //   //Testing data transer to post method
  // register(userData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/user`, userData);
  // }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/userlogin`, userData);
  }

 //Using routes
  //Post method from routes.js
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}