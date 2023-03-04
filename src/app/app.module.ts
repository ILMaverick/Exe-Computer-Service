import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaginaServiziComponent } from './components/pagina-servizi/pagina-servizi.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginaPrincipaleComponent } from './components/pagina-principale/pagina-principale.component';
import { PaginaRegistrazioneComponent } from './components/pagina-registrazione/pagina-registrazione.component';
import { LoginComponent } from './components/header/userComponent/login/login.component';
import { MenuUtenteComponent } from './components/header/userComponent/menu-utente/menu-utente.component';
import { MenuSitoComponent } from './components/header/menu-sito/menu-sito.component';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { AutenticazioneService } from './services/autenticazione.service';
import { FooterComponent } from './components/footer/footer.component';
import { ConfrontaPasswordValidator } from './components/pagina-registrazione/confronta-password/confronta-password-validator.directive';
import { PaginaRecuperoCredenzialiComponent } from './components/pagina-recupero-credenziali/pagina-recupero-credenziali.component';
import { PaginaRegistrazioneEffettuataComponent } from './components/pagina-registrazione/pagina-registrazione-effettuata/pagina-registrazione-effettuata.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaPrincipaleComponent,
    PaginaRegistrazioneComponent,
    LoginComponent,
    PaginaServiziComponent,
    MenuSitoComponent,
    MenuUtenteComponent,
    PaginaNonTrovataComponent,
    FooterComponent,
    ConfrontaPasswordValidator,
    PaginaRecuperoCredenzialiComponent,
    PaginaRegistrazioneEffettuataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [AutenticazioneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
