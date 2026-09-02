import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private apiUrl = 'http://localhost:8080/api/recommendations';

  constructor(private http: HttpClient) {}

  generateRecommendation(email: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/generate?email=${encodeURIComponent(email)}`,
      {}
    );
  }

  getRecommendations(email: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}?email=${encodeURIComponent(email)}`
    );
  }
}