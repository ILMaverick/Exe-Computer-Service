import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { TechsService } from 'src/app/services/techs.service';

@Component({
  selector: 'app-pagina-utenti',
  templateUrl: './pagina-utenti.component.html',
  styleUrls: ['./pagina-utenti.component.css']
})
export class PaginaUtentiComponent implements OnInit{

  constructor(private _tech: TechsService, private route: Router, private ActRoute: ActivatedRoute){
    // this.utenti = 
  }

  // utenti: Utente[];

  ngOnInit(): void {
    
  }

}
