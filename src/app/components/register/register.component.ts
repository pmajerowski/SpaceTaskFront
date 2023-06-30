import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email?: string;
  password?: string;
  name?: string;
  @Output() hideRegister = new EventEmitter<void>();


  onSubmit(event: Event) {

  }

  toggleRegister() {
    this.hideRegister.emit();
  }

}
