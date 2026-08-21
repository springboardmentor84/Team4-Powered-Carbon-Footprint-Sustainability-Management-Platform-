import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarbonService {

  private apiUrl = 'http://localhost:8080/carbon';

  constructor(private http: HttpClient) {}

  // Save activity
  saveActivity(activity: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, activity);
  }

  // Get activities
  getActivities(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${email}`);
  }

 deleteActivity(id: number, email: string): Observable<string> {
  return this.http.delete(
    `${this.apiUrl}/${id}?email=${encodeURIComponent(email)}`,
    { responseType: 'text' }
  );
}
}