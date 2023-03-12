import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-pagina-utente',
  templateUrl: './pagina-utente.component.html',
  styleUrls: ['./pagina-utente.component.css']
})
export class PaginaUtenteComponent implements OnInit {

  constructor(private _utente: UtentiService, private _route: Router, private ActRoute: ActivatedRoute) {
    
  }

  idUrl!: string;
  utente!: Utente;


  ngOnInit(): void {
    this.ActRoute.params.subscribe(p => {
      this.idUrl = p['id']
    })
    this._utente.getUserByUserId(this.idUrl).subscribe(res => {
      this.utente = res
    })
  }

}
