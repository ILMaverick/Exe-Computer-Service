import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtenteAutorizzatoGuard } from '../services/guards/utente-autorizzato.guard';
import { PaginaProfiloComponent } from '../components/pagina-profilo/pagina-profilo.component';

const routes: Routes = [
  {
    path: '', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivateId()], component: PaginaProfiloComponent
  },
  {
  path: ':id', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivateId()], component: PaginaProfiloComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UtentiRoutingModule { }
