import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/main-page/mainpage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationPageComponent } from './components/registration-page/registrationPage.component';

const routes: Routes = [{
  path: 'home', component: MainpageComponent
},
{
  path: 'registration', component: RegistrationPageComponent
},
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '404', component: PageNotFoundComponent },
{
  path: '**', pathMatch: 'full', redirectTo: '404'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
