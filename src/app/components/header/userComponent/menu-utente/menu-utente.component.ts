import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { AggiornamentoVistaService } from 'src/app/services/aggiornamento-vista.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-menu-utente',
  templateUrl: './menu-utente.component.html',
  styleUrls: ['./menu-utente.component.css']
})
export class MenuUtenteComponent implements OnInit{

  constructor(private route: Router, private _auth: AutenticazioneService, private _utente: UtentiService, private _vista: AggiornamentoVistaService, private _actRoute: ActivatedRoute) {
    
   }

  id_utente!: string;

  ngOnInit(): void {
    this.id_utente = this._utente.getUserIdFromLocal();
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
