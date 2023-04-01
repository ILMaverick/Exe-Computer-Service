import { Component, OnInit } from '@angular/core';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';

@Component({
  selector: 'app-pagina-principale',
  templateUrl: './pagina-principale.component.html',
  styleUrls: ['./pagina-principale.component.css']
})
export class PaginaPrincipaleComponent implements OnInit{
 
  constructor(private _auth: AutenticazioneService){

  }

  ngOnInit(): void {
    
  }

}
