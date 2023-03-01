import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';
import { ResultMessage } from '../models/resultMessage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _user = new User;
  private resultMessage = '';
  private userToken = '';

  constructor(private _http: HttpClient) { };

  login(userName: string, password: string): Observable<ResultMessage> {
    this._user.userName = userName.toLowerCase();
    this._user.password = password;
    return this._http.post<ResultMessage>(environment.usersUrl + '/login', this._user);
  };

  getResultMessage() {
    return this.resultMessage;
  }

  saveResponse(id: number, name: string): void {
    this._user.id_user = id;
    this._user.name = name;
    localStorage.setItem('id_user', id.toString());
    localStorage.setItem('name', name);
  }

  logout() {
    localStorage.clear()
  }

  isLogged(): boolean {
    return localStorage.getItem('id_user') != null || undefined ? true : false;
  };

  getName(): string {
    return localStorage.getItem('name')!;
  };

}