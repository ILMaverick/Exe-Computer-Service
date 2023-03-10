import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
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
      this._route.createUrlTree(['home']);
      return false;
    } else {
      return true;
    }

  }
}


