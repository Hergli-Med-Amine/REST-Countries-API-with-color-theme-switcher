import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getData(code: string): Observable<any> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<any>(url);
  }
  getName(code: string): Observable<any> {
    const url = `${this.apiUrl}/alpha/${code}?fields=name`;
    return this.http.get<any>(url);
  }
}