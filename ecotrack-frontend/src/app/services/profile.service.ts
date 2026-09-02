import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/profile';

  // Get profile
  getProfile(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${email}`);
  }

  // Update profile
  updateProfile(
    email: string,
    fullName: string,
    location: string
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${email}?fullName=${encodeURIComponent(fullName)}&location=${encodeURIComponent(location)}`,
      {}
    );
  }
}