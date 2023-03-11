import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiService } from '../utenti.service';

@Injectable({
  providedIn: 'root'
})
export class ValidazioneService implements HttpInterceptor {

  constructor(private _auth: AutenticazioneService, private _utente: UtentiService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if (this._auth.isLogged()) {
      const authReq = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + token + ' ' + this._utente.getRoleFromLocal())
      });
      return next.handle(authReq);
    }
    else {
      return next.handle(req);
    }
  }
}
