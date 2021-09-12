import { query } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterQueryComponent } from './views/register-query/register-query.component';
import { RequestPasswordComponent } from './views/request-password/request-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'esqueceu-senha',
    component: RequestPasswordComponent
  },
  {
    path: 'cadastrar-consulta',
    component: RegisterQueryComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
