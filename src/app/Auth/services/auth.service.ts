import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = 'AIzaSyAXajwxefWR0jxinLfkdFhIq1RFBrKh5vU';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}
    `,
      { email, password, returnSecureToken: true }
    );
  }

  register(email: string, password: string) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}
    `,
      { email, password, returnSecureToken: true }
    );
  }
}
