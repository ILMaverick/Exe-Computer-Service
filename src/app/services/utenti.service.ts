import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Risposta } from '../models/risposta';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private _http: HttpClient) {
  }

  utentiUrl: string = environment.utentiUrl;

  getUserByUserName(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.utentiUrl + '/byusername', userName);
  }

  getUserIdByUserName(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.utentiUrl + '/userID/username', { userName: userName })
  }

  checkUser(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.utentiUrl + '/userId/userName', { userName: userName })
  }

  getUserIdFromLocal(){
    return localStorage.getItem('id_utente')!;
  }

  getNameFromLocal(): string {
    return localStorage.getItem('nome')!;
  };
}
