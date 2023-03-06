import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';
import { UtentiService } from 'src/app/services/utenti.service';
import { ConfrontaPasswordValidator } from './confronta-password/confronta-password-validator.directive';

@Component({
  selector: 'app-pagina-registrazione',
  templateUrl: './pagina-registrazione.component.html',
  styleUrls: ['./pagina-registrazione.component.css']
})
export class PaginaRegistrazioneComponent implements OnInit{

  constructor(private _route: Router, private _auth: AutenticazioneService, private _formBuild: FormBuilder, private _utente: UtentiService) {

  }
  ngOnInit(): void {
    if(this._auth.isLogged()){
      this.routeTo('home');
    }
  }

  regexNome = '^(?![\\s]{1})(?!.*[\\s]{2})[A-Za-z\\s]{3,}$';
  regexTel = '^[0-9]+$';
  regexEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
  regexPass = '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{1,}$';

  formRegistrazione = this._formBuild.group({
    nome: ['', [Validators.required, Validators.maxLength(40), Validators.pattern(this.regexNome)]],
    cognome: ['', [Validators.required, Validators.maxLength(40), Validators.pattern(this.regexNome)]],
    indirizzo: ['', Validators.maxLength(40)],
    numero_civico: ['', Validators.maxLength(5)],
    citta: ['', Validators.maxLength(20)],
    provincia: ['', Validators.maxLength(2)],
    email: ['', [Validators.required, Validators.maxLength(40), Validators.pattern(this.regexEmail)]],
    numero_tel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(20), Validators.pattern(this.regexTel)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100), Validators.pattern(this.regexPass)]],
    confPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100), Validators.pattern(this.regexPass)]]
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
        this._auth.registerUser(this.formRegistrazione).subscribe((_res) => {
          if (_res.risultato) {
            _res.id_utente = res.id_utente;
            this._auth.saveLoginData(_res);
            this.routeTo('home');
          }
        })
      } else {
        alert(res.messaggio);
      }
      
    console.log(res);
    });
  }

  fixInputsForm() {
    this.formRegistrazione.value.nome = this.formRegistrazione.value.nome!.trim();
    this.formRegistrazione.value.nome = this.formRegistrazione.value.nome!.toUpperCase();
    this.formRegistrazione.value.cognome = this.formRegistrazione.value.cognome!.trim();
    this.formRegistrazione.value.cognome = this.formRegistrazione.value.cognome!.toUpperCase();
    this.formRegistrazione.value.email = this.formRegistrazione.value.email!.toUpperCase();
  }

  public routeTo(link: string) {
    this._route.createUrlTree([link]);
  }

}
