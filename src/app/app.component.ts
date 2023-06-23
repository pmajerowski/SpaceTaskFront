import { OnInit, Component, Input } from '@angular/core';
import { LocalStorageService } from "./services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged!: boolean;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    const token = this.localStorage.get('jwt-token');
    if(token !== null) {
        this.logged = true;
    }
  }

  handleLogin(value: boolean) {
      this.logged = value;
  }

  handleLogout() {
    this.localStorage.remove('jwt-token');

    if (this.localStorage.get('jwt-token') == null ) {
      this.logged = !this.logged;
    }

  }
}
