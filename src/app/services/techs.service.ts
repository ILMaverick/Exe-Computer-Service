import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Utente } from '../models/utente';
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  constructor(private _http: HttpClient) {
  }

  getInterventsForUser(codice_utente: string){
    
  }
}
