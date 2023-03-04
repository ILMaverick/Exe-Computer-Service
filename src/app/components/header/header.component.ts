import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  iconaLogin: string = '../../../assets/login.svg';
  isLogged: boolean = false;
  nomeUtente: string = '';
  mostraMenuLogin: boolean = false;
  mostraMenuSito: boolean = false;

  constructor(private _auth: AutenticazioneService, private _utente: UtentiService) { }

  ngOnInit(): void {
    if (this._auth.isLogged()) {
      this.isLogged = this._auth.isLogged();
      this.nomeUtente = this._utente.getNameFromLocal();
    }
    this.iconaLogin = this.isLogged ? '../../../assets/utente.svg' : '../../../assets/login.svg';
  };

  openOrHideLoginMenu() {
    this.mostraMenuLogin = this.mostraMenuLogin ? false : true;
    this.mostraMenuSito = false
  };

  openOrHideSideMenu() {
    this.mostraMenuSito = this.mostraMenuSito ? false : true
    this.mostraMenuLogin = false
  };
}
