import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isAuthenticated: boolean = false;

    constructor(private authService: AuthService) { }

    ngOnInit() : void {
      this.authService.authenticate().subscribe(
            (result) => {

              console.log('Is Authenticated:', this.isAuthenticated);
            },
            (error) => {
              console.error('Authentication Error:', error);
            }
      );
    }

}
