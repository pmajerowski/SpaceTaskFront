import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  signInCallBack(): void {
    console.log("SIGN IN CALL BACK");
  }
}
