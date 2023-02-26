import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './userMenu.component.html',
  styleUrls: ['./userMenu.component.css']
})
export class UserMenuComponent {

  constructor(private route: Router, private _auth: AuthenticationService) { }


  logout() {
    this._auth.logout();
    this.backHome();
  }

  private backHome() {
    this.route.navigate(['']).then(() => location.reload());
  }
}
