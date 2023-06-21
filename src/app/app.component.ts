import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  token!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authenticate().subscribe(
      (token: string) => {
        this.token = token;
        this.isAuthenticated = true;
        console.log('Token:', this.token);
      },
      (error) => {
        console.error('Authentication Errorrrrrrrrrrrrrrrr:', error);
      }
    );
  }
}
