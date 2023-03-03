import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';

@Component({
  selector: 'app-menu-utente',
  templateUrl: './menu-utente.component.html',
  styleUrls: ['./menu-utente.component.css']
})
export class MenuUtenteComponent {

  constructor(private route: Router, private _auth: AutenticazioneService) { }


  logout() {
    this._auth.logout();
    this.backHome();
  }

  private backHome() {
    this.route.navigate(['']).then(() => location.reload());
  }
}
