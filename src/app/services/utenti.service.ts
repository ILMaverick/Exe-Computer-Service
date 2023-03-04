import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Risposta } from '../models/risposta';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private _http: HttpClient) { }

  url = environment.utentiUrl;

  getUserCodeById(id: number): Observable<Utente> {
    return this._http.get<Utente>(this.url + '/usercode/:' + id.toString());
  }

  getUserByUserName(userName: string): Observable<Utente> {
    return this._http.post<Utente>(this.url + '/byusername', userName);
  }

  getUserIdByUserCode(userCode: string): Observable<Risposta>{
    return this._http.post<Risposta>(this.url + '/userID/username', {userCode: userCode})
  }

  checkUser(userName: string): Observable<Risposta> {
    return this._http.post<Risposta>(this.url + '/check', {userName: userName})
  }

  registerUser(form: FormGroup): Observable<Risposta> {
    return this._http.post<Risposta>(this.url + '/register', form.value);
  }

  getUsers(): Observable<Utente[]> {
    return this._http.get<Utente[]>(this.url + '/all');
  }

  getNameFromLocal(): string {
    return localStorage.getItem('nome')!;
  };
}
