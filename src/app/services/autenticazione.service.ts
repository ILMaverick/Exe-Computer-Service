import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Utente } from '../models/utente';
import { environment } from 'src/environments/environment.development';
import { Risposta } from '../models/risposta';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {

  private _utente = new Utente;
  private tokenUtente = '';

  constructor(private _http: HttpClient) { };

  login(form: FormGroup): Observable<Risposta> {
    return this._http.post<Risposta>(environment.utentiUrl + '/login', form.value);
  };

  saveLoginData(_id_utente: number, nome: string): void {
    this._utente.id_utente = _id_utente;
    this._utente.nome = nome;
    localStorage.setItem('id_utente', _id_utente.toString());
    localStorage.setItem('nome', nome);
  }

  logout() {
    localStorage.clear()
  }

  isLogged(): boolean {
    return localStorage.getItem('id_utente') != null || undefined ? true : false;
  };

}