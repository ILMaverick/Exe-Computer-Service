import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteAutenticatoGuard{
  constructor(private _auth: AutenticazioneService, private _route: Router) {

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._auth.isLogged()) {
      alert('Utente non autorizzato o sessione scaduta. Effettuare il Login!');
      this._route.createUrlTree(['home']);
      return false;
    } else {
      return true;
    }

  }

  canDectivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._auth.isLogged()) {
      this._route.createUrlTree(['home']);
      return false;
    } else {
      return true;
    }

  }
  
}
