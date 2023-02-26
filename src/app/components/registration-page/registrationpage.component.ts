import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registrationPage.component.html',
  styleUrls: ['./registrationPage.component.css']
})
export class RegistrationPageComponent implements OnInit{

constructor (_auth: AuthenticationService){}

  ngOnInit(): void {
  }

  regex = '^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]$';

  showedPassword: string = 'password'
  opacityEye: string = '100';

  submitLogin() {    
    if(this.checkPassword()){
      
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
