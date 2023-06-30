import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email?: string;
  password?: string;
  name?: string;


  onSubmit(event: Event) {
    console.log("SUBMIT FROM REGISTER")
  }

  toggleRegister() {
    console.log("TOGGLE REGISTER FROM REGISTER")
  }

}
