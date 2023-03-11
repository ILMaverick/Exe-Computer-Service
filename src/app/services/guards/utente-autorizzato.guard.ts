import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiService } from '../utenti.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteAutorizzatoGuard {

  idUrl!: string;

  constructor(private _utente: UtentiService, private _auth: AutenticazioneService, private _route: Router) {
    
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.idUrl === this._utente.getUserIdFromLocal()) {
      alert('Utente non autorizzato o sessione scaduta. Effettuare il Login!');
      return this._route.createUrlTree(['home']);
    } else {
      return true;
    }

  }
}


