import { Component } from '@angular/core';
import { AggiornamentoVistaService } from 'src/app/services/aggiornamento-vista.service';

@Component({
  selector: 'app-menu-sito',
  templateUrl: './menu-sito.component.html',
  styleUrls: ['./menu-sito.component.css']
})
export class MenuSitoComponent {

  constructor (private _vista: AggiornamentoVistaService){

  }

  hideMenuSito(){
    this._vista.emitVistaMenuSito();
  }

}
