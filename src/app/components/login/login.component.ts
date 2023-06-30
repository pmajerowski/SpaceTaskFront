import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(private loginService: LoginServiceService, private localStorage: LocalStorageService) { }

  onSubmit(event: Event) {
      event.preventDefault();
      this.loginService.signIn(this.email, this.password)
        .subscribe((response) => {
              this.localStorage.set('jwt-token', response.token);
              this.loggedIn.emit(true);
          });
  }

  toggleRegister() {

    console.log("REGISTER")
  }

}
