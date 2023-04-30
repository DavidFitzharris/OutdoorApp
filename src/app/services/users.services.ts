import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Node express server
  private apiUrl = 'http://localhost:3000/api';

  //BehaviorSubjects to store currentUser and currentUserEmail
  private currentUserSource = new BehaviorSubject<any>(null);
  private currentUserEmailSource = new BehaviorSubject<any>(null);

  //Expose the BehaviorSubjects as observables
  currentUser = this.currentUserSource.asObservable();
  currentUserEmail = this.currentUserEmailSource.asObservable();

  constructor(private http: HttpClient) { }
  //  //For use in server
  //   //Testing data transer to post method
  // register(userData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/user`, userData);
  // }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/userlogin`, userData).pipe(
      tap(response => {
        this.currentUserSource.next(response.userDetails.name);
        this.currentUserEmailSource.next(response.userDetails.email);
      })
    );;
  }

  //Updating current user details
  setCurrentUser(user: any) {
    this.currentUserSource.next(user);
  }

  setCurrentUserEmail(email: any) {
    this.currentUserEmailSource.next(email);
  }

  //Using routes
  //Post method from routes.js
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}