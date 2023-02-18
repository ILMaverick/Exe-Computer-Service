import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loginDisplay: boolean = false;

  openOrHideMenu(){
    this.loginDisplay = this.loginDisplay? false : true
  }
}
