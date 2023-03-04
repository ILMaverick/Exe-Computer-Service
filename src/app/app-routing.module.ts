import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipaleComponent } from './components/pagina-principale/pagina-principale.component';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { PaginaRegistrazioneComponent } from './components/pagina-registrazione/pagina-registrazione.component';
import { PaginaRegistrazioneEffettuataComponent } from './components/pagina-registrazione/pagina-registrazione-effettuata/pagina-registrazione-effettuata.component';
import { PaginaRecuperoCredenzialiComponent } from './components/pagina-recupero-credenziali/pagina-recupero-credenziali.component';

const routes: Routes = [
  { path: 'home', component: PaginaPrincipaleComponent },
  {
    path: 'registrazione', component: PaginaRegistrazioneComponent, children: [{
      path: 'reg_effettuata', component: PaginaRegistrazioneEffettuataComponent
    }]
  },
  { path: 'recupero', component: PaginaRecuperoCredenzialiComponent },
  { path: 'utente', component: PaginaPrincipaleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '404', component: PaginaNonTrovataComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
