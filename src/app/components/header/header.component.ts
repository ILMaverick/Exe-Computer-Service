import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogged: boolean = false
  nomeUtente: string = 'Matteo'

  loginMenuDisplay: boolean = false;
  sideMenuDisplay: boolean = false;
  searchDisplay: boolean = false;

  openOrHideLoginMenu(){
    this.loginMenuDisplay = this.loginMenuDisplay ? false : true;
    this.sideMenuDisplay = false
    this.searchDisplay = false
  }

  openOrHideSideMenu(){
    this.sideMenuDisplay = this.sideMenuDisplay ? false : true
    this.loginMenuDisplay = false
    this.searchDisplay = false
  }

  openOrHideSearch(){
    this.searchDisplay = this.searchDisplay ? false : true
    this.loginMenuDisplay = false
    this.sideMenuDisplay = false
  }
}
