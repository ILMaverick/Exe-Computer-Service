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

  techUrl: string = environment.techUrl;

  getInterventi(): Observable<Risposta[]> {
    return this._http.get<Risposta[]>(this.techUrl + '/intervents');
  }

  getInterventiByStatoIntervento(stato_intervento: string){
    return this._http.post<Risposta[]>(this.techUrl + '/intervents', {stato_intervento: stato_intervento});
  }
}
