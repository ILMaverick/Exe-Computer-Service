import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { ConfrontaPasswordValidator } from './pagina-registrazione/confronta-password-validator.directive';

@Component({
  selector: 'app-pagina-registrazione',
  templateUrl: './pagina-registrazione.component.html',
  styleUrls: ['./pagina-registrazione.component.css']
})
export class PaginaRegistrazioneComponent {

  constructor(private _route: Router, private _auth: AutenticazioneService, private _formBuild: FormBuilder) {
  }

  passValidator = new ConfrontaPasswordValidator;

  formRegistrazione = this._formBuild.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    indirizzo: ['', Validators.maxLength(40)],
    numero_civico: ['', Validators.maxLength(5)],
    citta: ['', null],
    provincia: ['', null],
    email: ['', [Validators.required, Validators.email]],
    numero_tel: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confPassword: ['', [Validators.required, Validators.minLength(8)]]
  },{
    validators: [ConfrontaPasswordValidator.passNotEqual]}
  );
  
  public _utente: Utente = new Utente;

  mostraPassword: string = 'password';
  mostraConfPassword: string = 'password';
  mostraOcchio: string = 'eyeFull';
  mostraOcchioConferma: string = 'eyeFull';
  opacitaOcchio: string = '100';
  opacitaOcchioConferma: string = '100';

  showPassword(num: number) {
    if (num == 1) {
      this.mostraPassword = this.mostraPassword.match('password') ? 'text' : 'password';
      this.mostraOcchio = this.mostraOcchio.match('eyeFull') ? 'eyeLess' : 'eyeFull';
    } else {
      this.mostraConfPassword = this.mostraConfPassword.match('password') ? 'text' : 'password';
      this.mostraOcchioConferma = this.mostraOcchioConferma.match('eyeFull') ? 'eyeLess' : 'eyeFull';
    }
  }

  submitRegistration() {
    console.log(this.formRegistrazione);
    // }
    // this._auth.login(form)
    // this.reload()
  }

}
