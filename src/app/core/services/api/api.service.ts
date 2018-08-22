import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(`${this.apiUrl}/${url}/`, this.httpOptions).toPromise();
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.apiUrl}/${url}/`, body, this.httpOptions).toPromise();
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(`${this.apiUrl}/${url}/`, body, this.httpOptions).toPromise();
  }

  delete<T>(url: string) {
    return this.http.delete<T>(`${this.apiUrl}/${url}/`, this.httpOptions).toPromise();
  }
}
