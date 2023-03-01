import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registrationPage.component.html',
  styleUrls: ['./registrationPage.component.css']
})
export class RegistrationPageComponent {

  constructor(private _route: Router, private _auth: AuthenticationService) { }

  public _user: User = new User;

  showedPassword: string = 'password'
  showedPasswordConfirm: string = 'password'
  opacityEye: string = '100';
  opacityEyeconfirmation: string = '100';

  regex = '^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]$';

  submitRegistration() {
    if (this.checkPassword()) {
    }

    // }
    // this._auth.login(form)
    // this.reload()
  }

  checkPassword(): Boolean {
    // return this.user.password.match(this.regex) == null ? true : false
    return false
  }

}
