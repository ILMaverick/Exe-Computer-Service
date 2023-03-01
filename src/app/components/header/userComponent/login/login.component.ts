import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userName: string = '';
  public userPassword: string = '';

  showedPassword: string = 'password';
  displayEye: string = 'eyeFull';

  constructor(private route: Router, private _auth: AuthenticationService) { }

  onInputUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onInputPassword(event: Event) {
    this.userPassword = (<HTMLInputElement>event.target).value;
  }

  showPassword() {
    this.showedPassword = this.showedPassword.match('password') ? 'text' : 'password';
    this.displayEye = this.displayEye.match('eyeFull') ? 'eyeLess' : 'eyeFull';
  }

  submitLogin() {
    this._auth.login(this.correctInputsSpaces(this.userName),this.correctInputsSpaces(this.userPassword)).subscribe((res) => {
      if (res.result) {
        this._auth.saveResponse(res.id_user, res.name);
        this.backHome();
      }
      else {
        alert(res.message);
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
