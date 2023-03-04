import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { UtentiService } from 'src/app/services/utenti.service';
import { ConfrontaPasswordValidator } from './confronta-password/confronta-password-validator.directive';

@Component({
  selector: 'app-pagina-registrazione',
  templateUrl: './pagina-registrazione.component.html',
  styleUrls: ['./pagina-registrazione.component.css']
})
export class PaginaRegistrazioneComponent {

  constructor(private _route: Router, private _auth: AutenticazioneService, private _formBuild: FormBuilder, private _utente: UtentiService) {

  }

  regexNome = "^(?![\\s]{1})(?!.*[\\s]{2})[A-Za-z\\s]{3,}$";
  regexTel = "^[0-9]+$";
  regexEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$";
  regexPass = "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{1,}$";

  formRegistrazione = this._formBuild.group({
    nome: ['Matteo ', [Validators.required, Validators.maxLength(40), Validators.pattern(this.regexNome)]],
    cognome: ['Pallotti', [Validators.required, Validators.maxLength(40), Validators.pattern(this.regexNome)]],
    indirizzo: ['', Validators.maxLength(40)],
    numero_civico: ['', Validators.maxLength(5)],
    citta: ['', Validators.maxLength(20)],
    provincia: ['', Validators.maxLength(2)],
    email: ['pallottimatteo87@gmail.com', [Validators.required, Validators.maxLength(40), Validators.pattern(this.regexEmail)]],
    numero_tel: ['3929217858', [Validators.required, Validators.minLength(9), Validators.maxLength(20), Validators.pattern(this.regexTel)]],
    password: ['Prova123!', [Validators.required, Validators.minLength(8), Validators.maxLength(100), Validators.pattern(this.regexPass)]],
    confPassword: ['Prova123!', [Validators.required, Validators.minLength(8), Validators.maxLength(100), Validators.pattern(this.regexPass)]]
  }, {
    validators: [ConfrontaPasswordValidator.passNotEqual]
  }
  );

  mostraPassword: string = 'password';
  mostraConfPassword: string = 'password';
  mostraOcchio: string = 'eyeFull';
  mostraOcchioConferma: string = 'eyeFull';

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
    this.fixInputsForm();
    this._utente.checkUser(this.formRegistrazione.value.email!).subscribe((res) => {
      if (!res.risultato) {
        this._utente.registerUser(this.formRegistrazione).subscribe((res) => {
          if (res.risultato) {
            this._auth.saveLoginData(res.id_utente, res.nome);
            this.backHome();
          }
        })
      } else {
        alert(res.messaggio);
      }
      
    console.log(res);
    });

    // }
    // this._auth.login(form)
    // this.reload()
  }

  fixInputsForm() {
    this.formRegistrazione.value.nome = this.formRegistrazione.value.nome!.trim();
    this.formRegistrazione.value.nome = this.formRegistrazione.value.nome!.toUpperCase();
    this.formRegistrazione.value.cognome = this.formRegistrazione.value.cognome!.trim();
    this.formRegistrazione.value.cognome = this.formRegistrazione.value.cognome!.toUpperCase();
    this.formRegistrazione.value.email = this.formRegistrazione.value.email!.toUpperCase();
  }

  public backHome() {
    this._route.navigate(['home']).then(() => window.location.reload());
  }

}
