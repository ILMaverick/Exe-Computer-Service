import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private _route: Router, private _auth: AutenticazioneService, private _formBuild: FormBuilder) { }
  

  formLogin = this._formBuild.group({
    userName: ['', [Validators.required, Validators.maxLength(40)]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(100)]],
  }
  );

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
        this._auth.saveLoginData(res.id_utente, res.nome);
        this.backHome();
      }
      else {
        alert(res.messaggio);
      };
    })

  }

  fixInputsForm(){
    this.formLogin.value.userName = this.formLogin.value.userName!.trim();
    this.formLogin.value.userName = this.formLogin.value.userName!.toUpperCase();
    this.formLogin.value.password = this.formLogin.value.password!.trim();
  }

  public backHome() {
    this._route.navigate(['home']).then(() => window.location.reload());
  }

}
