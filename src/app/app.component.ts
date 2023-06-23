import { OnInit, Component } from '@angular/core';
import { LocalStorageService } from "./services/local-storage.service";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logged!: boolean;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    const token = this.localStorage.get('jwt-token');
    if (token !== null) {
      const decodedToken: any = jwt_decode(token);
      if (decodedToken.exp * 1000 > Date.now()) {
        this.logged = true;
      } else {
        this.localStorage.remove('jwt-token');
      }
    }
  }

  handleLogin(value: boolean) {
    this.logged = value;
  }

  handleLogout() {
    this.localStorage.remove('jwt-token');

    if (this.localStorage.get('jwt-token') == null) {
      this.logged = !this.logged;
    }
  }
}
