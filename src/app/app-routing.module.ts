import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/main-page/mainpage.component';
import { RegistrationpageComponent } from './components/registration-page/registrationpage.component';

const routes: Routes = [{
  path: 'home', component: MainpageComponent
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
