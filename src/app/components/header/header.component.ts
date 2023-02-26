import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged: boolean = false;
  nomeUtente: string = '';
  loginMenuDisplay: boolean = false;
  sideMenuDisplay: boolean = false;
  searchDisplay: boolean = false;

  constructor(private _auth: AuthenticationService) {};

  ngOnInit(): void {
    if (this._auth.isLogged()){
      this.isLogged = this._auth.isLogged();
      this.nomeUtente = this._auth.getName();
    }
  };

  openOrHideLoginMenu(){
    this.loginMenuDisplay = this.loginMenuDisplay ? false : true;
    this.sideMenuDisplay = false
    this.searchDisplay = false
  };

  openOrHideSideMenu(){
    this.sideMenuDisplay = this.sideMenuDisplay ? false : true
    this.loginMenuDisplay = false
    this.searchDisplay = false
  };

  openOrHideSearch(){
    this.searchDisplay = this.searchDisplay ? false : true
    this.loginMenuDisplay = false
    this.sideMenuDisplay = false
  };
}
