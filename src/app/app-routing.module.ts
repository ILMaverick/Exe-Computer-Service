import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipaleComponent } from './components/pagina-principale/pagina-principale.component';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { PaginaRegistrazioneComponent } from './components/pagina-registrazione/pagina-registrazione.component';
import { PaginaRecuperoCredenzialiComponent } from './components/pagina-recupero-credenziali/pagina-recupero-credenziali.component';
import { UtenteAutenticatoGuard } from './services/guards/utente-autenticato.guard';
import { UtenteAutorizzatoGuard } from './services/guards/utente-autorizzato.guard';
import { TechAutorizzatoGuard } from './services/guards/tech-autorizzato.guard';
import { PaginaUtentiComponent } from './components/pagina-utenti/pagina-utenti.component';
import { PaginaUtenteComponent } from './components/pagina-utenti/pagina-utente/pagina-utente.component';

const routes: Routes = [
  { path: 'home', component: PaginaPrincipaleComponent },
  { path: 'registrazione', canActivate: [() => inject(UtenteAutenticatoGuard).canActivateRegistration()], component: PaginaRegistrazioneComponent },
  { path: 'recupero', component: PaginaRecuperoCredenzialiComponent },
  {
    path: 'utenti', canActivateChild: [() => inject(UtenteAutenticatoGuard).canActivate()], children: [{
      path: 'all', canActivate: [() => inject(TechAutorizzatoGuard).canActivate()], component: PaginaUtentiComponent
    },
    {
      path: ':id', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaUtenteComponent
    }]
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '404', component: PaginaNonTrovataComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
