import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Risposta } from '../models/risposta';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {


  constructor(private _http: HttpClient) {
    
  }

  utentiUrl: string = environment.utentiUrl;
  _ruolo: string = '';

  
  getUserByUserId(id_utente: string): Observable<Utente> {
    return this._http.post<Utente>(this.utentiUrl + '/byUserId', { id_utente: id_utente });
  }

  getUserIdByUserName(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.utentiUrl + '/userId/username', { userName: userName });
  }

  getRoleByUserId(id_utente: string): Observable<Risposta>{
    return this._http.post<Risposta>(this.utentiUrl + '/role', { id_utente: id_utente });
  }
  
  getRole(): string {
    if (this.getUserIdFromLocal() && this._ruolo.match('')){
      let _ruoloTemp: string = '';
      this.getRoleByUserId(this.getUserIdFromLocal()).subscribe(risp => {
        _ruoloTemp = risp.ruolo;
      })
      return _ruoloTemp;
    }
    return this._ruolo;
  }

  setRole(ruolo: string): void {
    this._ruolo = ruolo;
  }

  getUserIdFromLocal(): string {
    return localStorage.getItem('id_utente')!;
  }

  getNameFromLocal(): string {
    return localStorage.getItem('nome')!;
  };
}
