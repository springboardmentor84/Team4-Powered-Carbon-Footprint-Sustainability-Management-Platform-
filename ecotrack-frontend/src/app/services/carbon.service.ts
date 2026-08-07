import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarbonService {

  private apiUrl = 'http://localhost:8080/carbon';

  constructor(private http: HttpClient) {}

  // Save activity to backend
  saveActivity(activity: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, activity);
  }

  // Get activities of logged-in user
  getActivities(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${email}`);
  }

}