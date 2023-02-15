import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './components/mainPage/mainpage/mainpage.component';
import { LoginpageComponent } from './components/loginPage/loginpage/loginpage.component';
import { RegistrationpageComponent } from './components/registrationPage/registrationpage/registrationpage.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    LoginpageComponent,
    RegistrationpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
