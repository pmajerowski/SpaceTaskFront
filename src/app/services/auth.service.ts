import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Task} from '../Task';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl = 'http://localhost:8080/authenticate';

  constructor(private http: HttpClient) { }

  authenticate(): Observable<string> {
      const body = {
        email: 'user@user.com',
        password: 'password'
      };

      return this.http.post<string>(this.authUrl, body);
    }
}
