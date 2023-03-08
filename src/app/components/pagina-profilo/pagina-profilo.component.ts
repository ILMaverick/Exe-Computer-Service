import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-pagina-profilo',
  templateUrl: './pagina-profilo.component.html',
  styleUrls: ['./pagina-profilo.component.css']
})
export class PaginaProfiloComponent {

  constructor(private _utente: UtentiService, private _route: ActivatedRoute){
    this._route.params.subscribe(params => {
    })
    
  }

}
