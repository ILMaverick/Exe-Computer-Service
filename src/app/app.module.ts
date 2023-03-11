import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaginaServiziComponent } from './components/pagina-servizi/pagina-servizi.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginaPrincipaleComponent } from './components/pagina-principale/pagina-principale.component';
import { PaginaRegistrazioneComponent } from './components/pagina-registrazione/pagina-registrazione.component';
import { LoginComponent } from './components/header/login/login.component';
import { MenuLoggedComponent } from './components/header/menu-logged/menu-logged.component';
import { MenuSitoComponent } from './components/header/menu-sito/menu-sito.component';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { AutenticazioneService } from './services/autenticazione.service';
import { FooterComponent } from './components/footer/footer.component';
import { ConfrontaPasswordValidator } from './components/pagina-registrazione/confronta-password/confronta-password-validator.directive';
import { PaginaRecuperoCredenzialiComponent } from './components/pagina-recupero-credenziali/pagina-recupero-credenziali.component';
import { ValidazioneService } from './services/interceptors/validazione.service';
import { PaginaInCostruzioneComponent } from './components/pagina-in-costruzione/pagina-in-costruzione.component';
import { PaginaUtentiComponent } from './components/pagina-utenti/pagina-utenti.component';
import { PaginaUtenteComponent } from './components/pagina-utenti/pagina-utente/pagina-utente.component';
import { PaginaAssistenzaTecnicaComponent } from './components/pagina-assistenza-tecnica/pagina-assistenza-tecnica.component';
import { PaginaAssistenzaUtenteComponent } from './components/pagina-assistenza-utente/pagina-assistenza-utente.component';
import { PaginaChiSiamoComponent } from './components/pagina-chi-siamo/pagina-chi-siamo.component';
import { PaginaContattiComponent } from './components/pagina-contatti/pagina-contatti.component';
import { PaginaHardwareComponent } from './components/pagina-hardware/pagina-hardware.component';
import { PaginaInterventiComponent } from './components/pagina-interventi/pagina-interventi.component';
import { PaginaTicketsComponent } from './components/pagina-tickets/pagina-tickets.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaPrincipaleComponent,
    PaginaRegistrazioneComponent,
    LoginComponent,
    PaginaServiziComponent,
    MenuSitoComponent,
    MenuLoggedComponent,
    PaginaNonTrovataComponent,
    FooterComponent,
    ConfrontaPasswordValidator,
    PaginaRecuperoCredenzialiComponent,
    PaginaInCostruzioneComponent,
    PaginaUtentiComponent,
    PaginaUtenteComponent,
    PaginaAssistenzaTecnicaComponent,
    PaginaAssistenzaUtenteComponent,
    PaginaChiSiamoComponent,
    PaginaContattiComponent,
    PaginaHardwareComponent,
    PaginaInterventiComponent,
    PaginaTicketsComponent,
  ],
  imports: [
    BrowserModule,
    TextFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ValidazioneService, multi: true}, AutenticazioneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
