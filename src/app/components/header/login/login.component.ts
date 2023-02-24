import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User = new User;
  regex = '^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$';

  showedPassword: string = 'password'
  opacityEye: string = '100';

  constructor(private route: Router) { }

  showPassword(){
    this.showedPassword = this.showedPassword.match('password')? 'text' : 'password'
    this.opacityEye = this.opacityEye.match('100') ? '25' : '100';
  }

  submitLogin() {    
    if(this.user.password.match(this.regex)){
      console.log('ok')
    } else {
      console.log('no')
    }
    // this._auth.login(form)
    // this.reload()
  }

  private reload() {
    window.location.reload()
  }

}
