import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Risposta } from '../models/risposta';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {

  constructor(private _http: HttpClient) { };

  loginEvent = new EventEmitter<boolean>();

  login(form: FormGroup): Observable<Risposta> {
    return this._http.post<Risposta>(environment.loginUrl, form.value);
  };

  logout(): void {
    localStorage.clear();
  };

  getLoginEvent(): EventEmitter<boolean> {
    return this.loginEvent;
  };

  emitLogged(logged: boolean): void {
    return this.loginEvent.emit(logged);
  }

  registerUser(form: FormGroup): Observable<Risposta> {
    return this._http.post<Risposta>(environment.registerUrl, form.value);
  }

  saveLoginData(risp: Risposta): void {
    localStorage.setItem('id_utente', risp.id_utente);
    localStorage.setItem('nome', risp.nome);
    localStorage.setItem('ruolo', risp.ruolo);
    localStorage.setItem('token', risp.token);
    localStorage.setItem('scadenza', (Date.now() + (risp.scadenzaToken * 1000)).toString());
  }

  isLogged(): boolean {
    return this.getToken() && this.getExpiration() && +this.getExpiration() > Date.now() ? true : false;
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getExpiration(): string {
    return localStorage.getItem('scadenza')!;
  }

  getRole(): string {
    return localStorage.getItem('ruolo')!;
  }

}