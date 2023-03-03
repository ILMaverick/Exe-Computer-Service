import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/services/autenticazione.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public nomeUtente: string = '';
  public password: string = '';

  mostraPassword: string = 'password';
  mostraOcchio: string = 'eyeFull';

  constructor(private route: Router, private _auth: AutenticazioneService) { }

  onInputNomeUtente(event: Event) {
    this.nomeUtente = (<HTMLInputElement>event.target).value;
  }

  onInputPassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  showPassword() {
    this.mostraPassword = this.mostraPassword.match('password') ? 'text' : 'password';
    this.mostraOcchio = this.mostraOcchio.match('eyeFull') ? 'eyeLess' : 'eyeFull';
  }

  submitLogin() {
    this._auth.login(this.correctInputsSpaces(this.nomeUtente),this.correctInputsSpaces(this.password)).subscribe((res) => {
      if (res.risultato) {
        this._auth.saveLoginData(res.id_utente, res.nome);
        this.backHome();
      }
      else {
        alert(res.messaggio);
      };
    })

  }

  correctInputsSpaces(string: string): string{
    return string.replace(/\s/g,"");
  }

  public backHome() {
    this.route.navigate(['home']).then(() => window.location.reload());
  }

}
