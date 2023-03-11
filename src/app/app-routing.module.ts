import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { PaginaPrincipaleComponent } from './components/pagina-principale/pagina-principale.component';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { PaginaRegistrazioneComponent } from './components/pagina-registrazione/pagina-registrazione.component';
import { PaginaRecuperoCredenzialiComponent } from './components/pagina-recupero-credenziali/pagina-recupero-credenziali.component';
import { UtenteAutenticatoGuard } from './services/guards/utente-autenticato.guard';
import { UtenteAutorizzatoGuard } from './services/guards/utente-autorizzato.guard';
import { TechAutorizzatoGuard } from './services/guards/tech-autorizzato.guard';
import { PaginaUtentiComponent } from './components/pagina-utenti/pagina-utenti.component';
import { PaginaUtenteComponent } from './components/pagina-utenti/pagina-utente/pagina-utente.component';
import { PaginaInCostruzioneComponent } from './components/pagina-in-costruzione/pagina-in-costruzione.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipaleComponent },
  { path: 'home', component: PaginaPrincipaleComponent },
  { path: 'registrazione', canActivate: [() => inject(UtenteAutenticatoGuard).canActivateRegistration()], component: PaginaRegistrazioneComponent },
  { path: 'recupero', component: PaginaInCostruzioneComponent },
  { path: 'prodotti', component: PaginaInCostruzioneComponent },
  { path: 'servizi', component: PaginaInCostruzioneComponent },
  { path: 'assistenzaTecnica', component: PaginaInCostruzioneComponent },
  { path: 'chiSiamo', component: PaginaInCostruzioneComponent },
  { path: 'contatti', component: PaginaInCostruzioneComponent },
  {
    path: 'utenti', canActivate: [() => inject(UtenteAutenticatoGuard).canActivate()], children: [{
      path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
      path: 'all', canActivate: [() => inject(TechAutorizzatoGuard).canActivate()], component: PaginaUtentiComponent
    },
    {
      path: ':id', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaUtenteComponent
    }]
  },
  {
    path: 'hardware', canActivate: [() => inject(UtenteAutenticatoGuard).canActivate()], children: [{
      path: '', canActivate: [() => inject(TechAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent
    },
    { path: 'all', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent },
    { path: ':id_hardware', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent }]
  },
  {
    path: 'interventi', canActivate: [() => inject(UtenteAutenticatoGuard).canActivate()], children: [{
      path: '', canActivate: [() => inject(TechAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent
    },
    { path: 'all', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent },
    { path: ':id_intervento', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent }]
  },
  {
    path: 'tickets', canActivate: [() => inject(UtenteAutenticatoGuard).canActivate()], children: [{
      path: '', canActivate: [() => inject(TechAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent
    },
    { path: 'all', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent },
    { path: ':id_tickets', canActivate: [() => inject(UtenteAutorizzatoGuard).canActivate()], component: PaginaInCostruzioneComponent }]
  },
  { path: 'supportoUtente', canActivate: [() => inject(UtenteAutenticatoGuard).canActivate()], component: PaginaInCostruzioneComponent },
  { path: '404', component: PaginaNonTrovataComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404' }];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
