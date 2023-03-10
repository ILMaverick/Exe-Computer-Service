import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-pagina-utente',
  templateUrl: './pagina-utente.component.html',
  styleUrls: ['./pagina-utente.component.css']
})
export class PaginaUtenteComponent implements OnInit {

  constructor(private _utente: UtentiService, private _route: Router) {
  }


  utente!: Utente;


  ngOnInit(): void {
    this._utente.getUserByUserId(this._utente.getUserIdFromLocal()).subscribe(res => {
      this.utente = res
    })
  }

}
