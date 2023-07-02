import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterService } from "../../services/register.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  loading = false;
  emailFocused: boolean = false;
  passwordFocused: boolean = false;
  email!: string;
  password!: string;
  name!: string;
  @Output() hideRegister = new EventEmitter<void>();
  emailError: string = '';
  passwordError: string = '';

  constructor(private registerService: RegisterService) {

    }

  onSubmit(event: Event) {

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(this.email);

    if (!isValidEmail) {
        this.emailError = 'Invalid email address.';
        return;
    }

    if (this.password.length < 8 || typeof this.password === 'undefined') {
        this.passwordError = 'Password should be at least 8 characters long.';
        return;
    }


    this.registerService.signUp(this.email, this.password, this.name)
            .subscribe(
              (response) => {
                this.loading = true;
                const minDelay = 400;
                const maxDelay = 3000;

                const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
                setTimeout(() => {
                        this.loading = false;
                        this.toggleRegister();
                      }, delay);

              },
              (error) => {
                if (error.status === 403) {
                  console.log("ERROR 403")
                } else {
                  console.log("OTHER ERROR")
                }
              }
            );
  }

  clearError() {
        this.emailError = '';
        this.passwordError = '';
    }

  toggleRegister() {
    this.hideRegister.emit();
  }

}
