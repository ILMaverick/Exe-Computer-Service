import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtenteAutorizzatoGuard } from '../services/guards/utente-autorizzato.guard';

const routes: Routes = [{
  path: '/:id', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UtentiRoutingModule { }
