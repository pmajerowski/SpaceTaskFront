import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterService } from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  name!: string;
  @Output() hideRegister = new EventEmitter<void>();

  constructor(private registerService: RegisterService) { }


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
