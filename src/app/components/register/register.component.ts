import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterService } from "../../services/register.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailFocused: boolean = false;
  passwordFocused: boolean = false;
  email!: string;
  password!: string;
  name!: string;
  registerForm!: FormGroup;
  @Output() hideRegister = new EventEmitter<void>();

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        name: ['']
      });
    }


  onSubmit(event: Event) {
    this.registerService.signUp(this.email, this.password, this.name)
            .subscribe(
              (response) => {
                console.log(response);
                this.toggleRegister();
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

  toggleRegister() {
    this.hideRegister.emit();
  }

}
