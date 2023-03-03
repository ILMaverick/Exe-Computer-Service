import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Utente } from '../models/utente';
import { environment } from 'src/environments/environment.development';
import { rispostaLogin } from '../models/rispostaLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {

  private _utente = new Utente;
  private tokenUtente = '';

  constructor(private _http: HttpClient) { };

  login(utente: string, password: string): Observable<rispostaLogin> {
    this._utente.userName = utente.toLowerCase();
    this._utente.password = password;
    return this._http.post<rispostaLogin>(environment.utentiUrl + '/login', this._utente);
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

  getName(): string {
    return localStorage.getItem('nome')!;
  };

}