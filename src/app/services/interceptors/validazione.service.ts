import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticazioneService } from '../autenticazione.service';

@Injectable({
  providedIn: 'root'
})
export class ValidazioneService implements HttpInterceptor {

  constructor(private _auth: AutenticazioneService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if (this._auth.isLogged()) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)

      });

      return next.handle(authReq);
    }
    else {
      return next.handle(req);
    }
  }
}
