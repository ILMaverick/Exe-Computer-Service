import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _user = new User;
  userToken = '';

  constructor(private _http:HttpClient) { }

  login(form:NgForm): boolean
  {
    // if(form.)
    // this._http.post(environment.usersUrl + '/login', ).subscribe((data) => {
    //   if(data.)
    // });
    return true
  }
  
}