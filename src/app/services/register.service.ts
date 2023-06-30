import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationRequest} from '../RegistrationRequest';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl: string = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string, username: string): Observable<any> {
    const body: RegistrationRequest = {
        email: email,
        password: password,
        name: username
    };

    return this.http.post<any>(this.registerUrl, body);
  }

}
