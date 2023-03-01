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
  eyeDisplay: string = 'eyeFull';

  constructor(private route: Router, private _auth: AuthenticationService) { }

  showPassword() {
    this.showedPassword = this.showedPassword.match('password') ? 'text' : 'password';
    this.eyeDisplay = this.eyeDisplay.match('eyeFull') ? 'eyeLess' : 'eyeFull';
  }

  onInputUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onInputPassword(event: Event) {
    this.userPassword = (<HTMLInputElement>event.target).value;
  }

  submitLogin() {
    this._auth.login(this.userName, this.userPassword).subscribe((res) => {
      if (res.result) {
        this._auth.saveResponse(res.id_user, res.name);
        this.backHome();
      }
      else {
        alert(res.message);
      };
    })

  }


  public backHome() {
    this.route.navigate(['home']).then(() => window.location.reload());
  }

}
