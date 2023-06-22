import { Component } from '@angular/core';
import { LoginServiceService } from "../../services/login-service.service";
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email !: string;
  password !: string;

  constructor(private loginService: LoginServiceService, private localStorage: LocalStorageService) { }

  onSubmit() {
    this.loginService.signIn(this.email, this.password)
        .subscribe((resp) => {
              console.log(resp.token);
              this.localStorage.set('jwt-token', resp.token);
          });
  }
}
