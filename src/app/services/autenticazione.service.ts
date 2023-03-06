import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Risposta } from '../models/risposta';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {

  constructor(private _http: HttpClient) { };

  login(form: FormGroup): Observable<Risposta> {
    return this._http.post<Risposta>(environment.loginUrl, form.value);
  };

  registerUser(form: FormGroup): Observable<Risposta> {
    return this._http.post<Risposta>(environment.registerUrl, form.value);
  }

  saveLoginData(risp: Risposta): void {
    const scadenza = moment().add(risp.scadenzaToken, 'second');
    localStorage.setItem('id_utente', risp.id_utente);
    localStorage.setItem('nome', risp.nome);
    localStorage.setItem('ruolo', risp.ruolo);
    localStorage.setItem('token', risp.token);
    localStorage.setItem('scadenza', scadenza.toString());
  }

  logout() {
    localStorage.clear()
  }

  isLogged(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration(): moment.MomentInput {
    return moment(localStorage.getItem('scadenza'));
  }
  
  getRole(): string {
    return localStorage.getItem('ruolo')!;
  }

}