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
  
  ruolo!: string;

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._utente.getRole().subscribe(res => {this.ruolo = res.ruolo});
    if (!this.ruolo.match('tecnico')) {
      alert('Utente non autorizzato o sessione scaduta. Effettuare il Login!');
      this._route.createUrlTree(['home']);
      return false;
    } else {
      return true;
    }
  }
}
