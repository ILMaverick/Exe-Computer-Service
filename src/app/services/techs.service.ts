import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Risposta } from '../models/risposta';
import { Utente } from '../models/utente';
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  constructor(private _http: HttpClient) {
  }

  utentiUrl: string = environment.utentiUrl;

  getUsers(): Observable<Risposta[]> {
    return this._http.get<Risposta[]>(this.utentiUrl + '/all');
  }
}
