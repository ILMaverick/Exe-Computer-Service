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

  url: string = environment.utentiUrl;

  getUserCodeById(id: number): Observable<Risposta> {
    return this._http.get<Risposta>(this.url + '/usercode/:' + id.toString());
  }

  getUserByUserName(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.url + '/byusername', userName);
  }

  getUserIdByUserCode(userCode: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.url + '/userID/username', { userCode: userCode })
  }

  setUserCodeAtRegistration(id: number): Observable<Risposta> {
    return this._http.get<Risposta>(this.url + '/usercode/:' + id.toString());
  }

  checkUser(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.url + '/check', { userName: userName })
  }

  getUsers(): Observable<Risposta[]> {
    return this._http.get<Risposta[]>(this.url + '/');
  }

  getNameFromLocal(): string {
    return localStorage.getItem('nome')!;
  };
}
