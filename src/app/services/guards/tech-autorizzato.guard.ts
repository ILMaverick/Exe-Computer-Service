import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiService } from '../utenti.service';

@Injectable({
  providedIn: 'root'
})
export class TechAutorizzatoGuard {

  constructor (private _auth: AutenticazioneService, private _utente: UtentiService,private _route: Router){

  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._utente.getRoleFromLocal().match('tecnico')) {
      alert('Utente non autorizzato o sessione scaduta. Effettuare il Login!');
      return this._route.createUrlTree(['home']);
    } else {
      return true;
    }
  }
}
