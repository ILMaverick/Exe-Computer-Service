import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicespageComponent } from './components/services-page/servicespage.component';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './components/main-page/mainpage.component';
import { RegistrationPageComponent } from './components/registration-page/registrationPage.component';
import { LoginComponent } from './components/header/userComponent/login/login.component';
import { UserMenuComponent } from './components/header/userComponent/user-menu/userMenu.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { AuthenticationService } from './services/authentication.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    RegistrationPageComponent,
    LoginComponent,
    ServicespageComponent,
    MenuComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
