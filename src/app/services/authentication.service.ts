import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public _user = new User;
  userToken = '';

  constructor(private _http: HttpClient) { };

  login(userName: string, password: string): void {
    this._user.userName = userName;
    this._user.password = password;
    console.log(this._user);
    this._http.post<User>(environment.usersUrl + '/login', this._user).subscribe((result) => {
      this.saveResponse(result.id_user, result.name);
    })
  };

  logout(){
    localStorage.clear()
  }

  isLogged(): boolean {
    return localStorage.getItem('id_user') != null || undefined ? true : false;
  };

  getName(): string{
    return localStorage.getItem('name')!;
  };

  private saveResponse(id: number, name: string): void{
    this._user.id_user = id;
    this._user.name = name;
    localStorage.setItem('id_user', id.toString());
    localStorage.setItem('name', name);
  }

}