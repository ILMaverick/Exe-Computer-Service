import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicespageComponent } from './components/services-page/servicespage.component';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './components/main-page/mainpage.component';
import { RegistrationpageComponent } from './components/registration-page/registrationpage.component';
import { LoginComponent } from './components/header/login/login.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { AuthenticationService } from './services/autentication.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    RegistrationpageComponent,
    LoginComponent,
    ServicespageComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
