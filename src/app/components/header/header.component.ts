import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Utente } from 'src/app/models/utente';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { AggiornamentoVistaService } from 'src/app/services/aggiornamento-vista.service';
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
  ruolo: string = '';
  mostraMenuLogin: boolean = false;
  mostraMenuSito: boolean = false;

  constructor(private _auth: AutenticazioneService, private _utente: UtentiService, private _vista: AggiornamentoVistaService) {
    this._auth.getLoginEvent().subscribe(logged => {
      this.isLogged = logged;
      this.nomeUtente = this._utente.getNameFromLocal()? this._utente.getNameFromLocal() : '';
      this.iconaLogin = this.isLogged ? '../../../assets/utente.svg' : '../../../assets/login.svg';
    })
    this._vista.eventVistaMenuUtente.subscribe(() => {
      this.openOrHideLoginMenu();
    }
    )
    this._vista.eventVistaMenuSito.subscribe(() => {
      this.openOrHideSideMenu();
    })
  }


  ngOnInit(): void {
    this.checkIconLogin();
  };

  openOrHideLoginMenu() {
    this.mostraMenuLogin = this.mostraMenuLogin ? false : true;
    this.mostraMenuSito = false
  };

  openOrHideSideMenu() {
    this.mostraMenuSito = this.mostraMenuSito ? false : true
    this.mostraMenuLogin = false
  };

  hideAll() {
    this.mostraMenuLogin = false;
    this.mostraMenuSito = false;
  }

  checkIconLogin() {
    if (this._auth.isLogged()) {
      this.isLogged = this._auth.isLogged();
      this.ruolo = this._utente.getRoleFromLocal();
      this.nomeUtente = this._utente.getNameFromLocal();
    } else {
      
    }
    this.iconaLogin = this.isLogged ? '../../../assets/utente.svg' : '../../../assets/login.svg';
  }

}
