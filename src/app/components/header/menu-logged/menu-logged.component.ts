import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { AggiornamentoVistaService } from 'src/app/services/aggiornamento-vista.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-menu-logged',
  templateUrl: './menu-logged.component.html',
  styleUrls: ['./menu-logged.component.css']
})
export class MenuLoggedComponent implements OnInit{

  id_utente!: string;
  ruolo!: string;

  constructor(private route: Router, private _auth: AutenticazioneService, private _utente: UtentiService, private _vista: AggiornamentoVistaService, private _actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_utente = this._utente.getUserIdFromLocal();
    this.ruolo = this._utente.getRoleFromLocal();
  }

  hideMenuUtente(){
    this._vista.emitVistaMenuUtente();
  }

  logout() {
    this._auth.logout();
    this._auth.emitLogged(false);
    console.log('logout effettuato');
    this.routeTo('home');
    this.hideMenuUtente();
  }

  private routeTo(link: string) {
    this.route.navigate([link]);
  }
}
