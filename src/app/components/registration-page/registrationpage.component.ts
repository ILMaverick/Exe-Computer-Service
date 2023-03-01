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
  passwordConfirm: string = '';

  showedPassword: string = 'password';
  showedConfirmationPassword: string = 'password';
  displayEye: string = 'eyeFull';
  displayEyeConfirmation: string = 'eyeFull';
  opacityEye: string = '100';
  opacityEyeConfirmation: string = '100';

  regex = '^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]$';

  onInputName(event: Event) {
    this._user.name = (<HTMLInputElement>event.target).value;
  }

  onInputLastname(event: Event) {
    this._user.lastname = (<HTMLInputElement>event.target).value;
  }

  onInputPassword(num: number, event: Event) {
    num == 1 ? this._user.password = (<HTMLInputElement>event.target).value : 
      this.passwordConfirm = (<HTMLInputElement>event.target).value;
  }

  showPassword(num: number) {
    if (num == 1) {
      this.showedPassword = this.showedPassword.match('password') ? 'text' : 'password';
      this.displayEye = this.displayEye.match('eyeFull') ? 'eyeLess' : 'eyeFull';
    } else {
      this.showedConfirmationPassword = this.showedConfirmationPassword.match('password') ? 'text' : 'password';
      this.displayEyeConfirmation = this.displayEyeConfirmation.match('eyeFull') ? 'eyeLess' : 'eyeFull';
    }
  }

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
