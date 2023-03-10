import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { AggiornamentoVistaService } from 'src/app/services/aggiornamento-vista.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private _route: Router, private _auth: AutenticazioneService, private _formBuild: FormBuilder, private _vista: AggiornamentoVistaService) { }

  formLogin = this._formBuild.group({
    userName: ['', [Validators.required, Validators.maxLength(40)]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(100)]],
  }
  );

  hideLogin(){
    this._vista.emitVistaMenuUtente();
  }

  mostraPassword: string = 'password';
  mostraOcchio: string = 'eyeFull';

  showPassword() {
    this.mostraPassword = this.mostraPassword.match('password') ? 'text' : 'password';
    this.mostraOcchio = this.mostraOcchio.match('eyeFull') ? 'eyeLess' : 'eyeFull';
  }

  submitLogin() {
    this.fixInputsForm();
    this._auth.login(this.formLogin).subscribe((res) => {
      if (res.risultato) {
        this._auth.saveLoginData(res);
        this._auth.emitLogged(true);
        console.log('login effettuato');
        this.routeTo('home');
        this.hideLogin();
      }
      else {
        alert(res.messaggio);
      };
    })

  }

  goRegistrationPage(){
    this.routeTo('registrazione');
  }

  fixInputsForm(){
    this.formLogin.value.userName = this.formLogin.value.userName!.trim();
    this.formLogin.value.userName = this.formLogin.value.userName!.toUpperCase();
    this.formLogin.value.password = this.formLogin.value.password!.trim();
  }

  public routeTo(link: string) {
    this._route.navigate([link]);
  }

}
