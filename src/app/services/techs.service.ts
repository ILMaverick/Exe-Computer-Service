import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Hardware } from '../models/hardware';
import { Intervento } from '../models/intervento';
import { Risposta } from '../models/risposta';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  constructor(private _http: HttpClient) {
  }

  techUrl: string = environment.techUrl;
  utentiUrl: string = environment.utentiUrl;
  hardwaresUrl: string = environment.hardwaresUrl;
  interventiUrl: string = environment.interventiUrl;

  getUtenti(): Observable<Risposta> {
    return this._http.get<Risposta>(this.utentiUrl + '/');
  }

  getInterventi(): Observable<Risposta> {
    return this._http.get<Risposta>(this.interventiUrl + '/');
  }

  getHardwares(): Observable<Hardware[]>{
    return this._http.get<Hardware[]>(this.hardwaresUrl + '/');
  }
}
