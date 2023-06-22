import { Component } from '@angular/core';
import { LoginServiceService } from "../../services/login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email !: string;
  password !: string;

  constructor(private loginService: LoginServiceService) { }

  onSubmit() {
    console.log(this.email + " " + this.password);
    this.loginService.signIn(this.email, this.password).subscribe((resp) => { console.log(resp) });
  }
}
