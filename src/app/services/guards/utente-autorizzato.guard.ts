import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiService } from '../utenti.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteAutorizzatoGuard{

  constructor(private _utente: UtentiService, private _auth: AutenticazioneService, private _route: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (route.params['id'] && route.params['id'] !== this._utente.getUserIdFromLocal() && !this._utente.getRoleFromLocal().match('tecnico')) {
      alert('Utente non autorizzato o sessione scaduta. Effettuare il Login!');
      return this._route.createUrlTree(['home']);
    } else {
      return true;
    }

  }
}


