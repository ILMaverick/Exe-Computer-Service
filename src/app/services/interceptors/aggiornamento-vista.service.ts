import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AggiornamentoVistaService {

  constructor() { }

  eventVistaMenuUtente = new EventEmitter;
  eventVistaMenuSito = new EventEmitter;

  emitVistaMenuUtente(){
    this.eventVistaMenuUtente.emit();
  }

  emitVistaMenuSito(){
    this.eventVistaMenuSito.emit();
  }

  emitVistaAll(){
    this.emitVistaMenuSito();
    this.emitVistaMenuUtente();
  }
}
