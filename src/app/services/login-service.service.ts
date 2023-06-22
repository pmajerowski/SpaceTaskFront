import { Injectable } from '@angular/core';
import {AuthenticationRequest} from '../AuthenticationRequest';
import {AuthenticationResponse} from '../AuthenticationResponse';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  authUrl: string = "http://localhost:8080/authenticate";

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<AuthenticationResponse> {
    const body: AuthenticationRequest = {
          email: email,
          password: password
        };

    return this.http.post<string>(this.authUrl, body);
  }
}
