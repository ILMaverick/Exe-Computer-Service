import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-profilo',
  templateUrl: './pagina-profilo.component.html',
  styleUrls: ['./pagina-profilo.component.css']
})
export class PaginaProfiloComponent {

  constructor(route: ActivatedRoute){
    const id: string = route.snapshot.params['id'];
    const url: string = route.snapshot.url.join('');
    const user = route.snapshot.data['utente'];
  }

}
