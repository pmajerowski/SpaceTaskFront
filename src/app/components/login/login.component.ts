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
  error: string = ''
  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(private loginService: LoginServiceService, private localStorage: LocalStorageService) { }

  onSubmit(event: Event) {
      event.preventDefault();
      this.loginService.signIn(this.email, this.password)
        .subscribe(
          (response) => {
            this.localStorage.set('jwt-token', response.token);
            this.loggedIn.emit(true);
          },
          (error) => {
            if (error.status === 403) {
              this.error = 'Invalid email or password.'; // Update the error message
            } else {
              this.error = 'An error occurred. Please try again.'; // Generic error message
            }
          }
        );
    }

  toggleRegister() {

    console.log("REGISTER")
  }

}
