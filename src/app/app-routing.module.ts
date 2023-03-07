import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipaleComponent } from './components/pagina-principale/pagina-principale.component';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { PaginaRegistrazioneComponent } from './components/pagina-registrazione/pagina-registrazione.component';
import { PaginaRecuperoCredenzialiComponent } from './components/pagina-recupero-credenziali/pagina-recupero-credenziali.component';
import { UtenteAutorizzatoGuard } from './services/guards/utente-autorizzato.guard';
import { UtenteAutenticatoGuard } from './services/guards/utente-autenticato.guard';

const routes: Routes = [
  { path: 'home', component: PaginaPrincipaleComponent },
  { path: 'registrazione', canActivate: [() => inject(UtenteAutenticatoGuard).canDectivate()], component: PaginaRegistrazioneComponent },
  { path: 'recupero',component: PaginaRecuperoCredenzialiComponent },
  { path: 'utenti', loadChildren: () => import('./routes/utenti-routing.module').then(mod => mod.UtentiRoutingModule), 
      canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()]},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '404', component: PaginaNonTrovataComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
