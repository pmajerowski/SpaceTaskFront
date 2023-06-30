import { Component, OnInit, QueryList } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import jwt_decode from 'jwt-decode';
import { TasksBoardComponent } from './components/tasks-board/tasks-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logged!: boolean;
  registerForm: boolean = false;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.checkToken();
  }

  handleLogin(value: boolean) {
    this.logged = value;
  }

  handleLogout() {
    this.localStorage.remove('jwt-token');
    this.logged = false;
  }

  showRegisterForm() {
    this.registerForm = true;
  }

  hideRegisterForm() {
    this.registerForm = false;
  }

  private checkToken() {
    const token = this.localStorage.get('jwt-token');
    if (token !== null) {
      const decodedToken: any = jwt_decode(token);
      if (decodedToken.exp * 1000 > Date.now()) {
        this.logged = true;
      } else {
        this.localStorage.remove('jwt-token');
        this.logged = false;
      }
    } else {
      this.logged = false;
    }
  }

}
