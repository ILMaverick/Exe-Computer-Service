import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiService } from '../utenti.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteAutorizzatoGuard {

  constructor(private _utente: UtentiService, private _route: Router) {

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._utente.getUserIdFromLocal()) {
      alert('Utente non autorizzato o sessione scaduta. Effettuare il Login!');
      this._route.createUrlTree(['home']);
      return false;
    } else {
      return true;
    }

  }
}


