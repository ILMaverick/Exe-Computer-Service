import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipaleComponent } from './components/pagina-principale/pagina-principale.component';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { PaginaRegistrazioneComponent } from './components/pagina-registrazione/pagina-registrazione.component';

const routes: Routes = [{
  path: 'home', component: PaginaPrincipaleComponent
},
{
  path: 'registrazione', component: PaginaRegistrazioneComponent
},
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '404', component: PaginaNonTrovataComponent },
{
  path: '**', pathMatch: 'full', redirectTo: '404'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
