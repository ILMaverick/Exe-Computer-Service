import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginPage/loginpage/loginpage.component';
import { MainpageComponent } from './components/mainPage/mainpage/mainpage.component';
import { RegistrationpageComponent } from './components/registrationPage/registrationpage/registrationpage.component';

const routes: Routes = [{
  path: 'home', component: MainpageComponent
},
{
  path: 'login', component: LoginpageComponent
},
{
  path: 'registration', component: RegistrationpageComponent
},
{
  path: '**', redirectTo: 'home', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
