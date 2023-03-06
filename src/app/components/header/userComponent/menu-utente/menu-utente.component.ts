import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-menu-utente',
  templateUrl: './menu-utente.component.html',
  styleUrls: ['./menu-utente.component.css']
})
export class MenuUtenteComponent implements OnInit{

  constructor(private route: Router, private _auth: AutenticazioneService, private _utente: UtentiService) { }

  id_utente:string = '';

  ngOnInit(): void {
    this.id_utente = this._utente.getUserIdFromLocal();
  }

  logout() {
    this._auth.logout();
    this.backHome();
  }



  private backHome() {
    this.route.createUrlTree(['home']);
  }
}
