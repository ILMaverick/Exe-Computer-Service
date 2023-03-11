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

  
  getUserByUserId(id_utente: string): Observable<Utente> {
    return this._http.post<Utente>(this.utentiUrl + '/byUserId', { id_utente: id_utente });
  }

  getUserIdByUserName(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.utentiUrl + '/userId/username', { userName: userName });
  }
  
  getRoleFromLocal(): string {
    return localStorage.getItem('ruolo')!;
  }

  getUserIdFromLocal(): string {
    return localStorage.getItem('id_utente')!;
  }

  getNameFromLocal(): string {
    return localStorage.getItem('nome')!;
  };
}
