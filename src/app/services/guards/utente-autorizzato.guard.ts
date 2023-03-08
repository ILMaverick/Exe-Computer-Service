import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiService } from '../utenti.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteAutorizzatoGuard {

  id!:string ;

  constructor(private _utente: UtentiService, private _route: Router, private _aRoute: ActivatedRoute) {
    // this._aRoute.params.subscribe(params => {
    //   this.id = params['id'];
    // })
  }

  canActivateId(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    // if (this._utente.getUserIdFromLocal().match(this.id)) {
    //   alert('Utente non autorizzato o sessione scaduta. Effettuare il Login!');
    //   this._route.createUrlTree(['home']);
    //   return false;
    // } else {
    //   return true;
    // }

  }
}


