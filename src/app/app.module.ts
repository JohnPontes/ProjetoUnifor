import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestPasswordComponent } from './views/request-password/request-password.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterQueryComponent } from './views/register-query/register-query.component';
import { ModalComponent } from './components/modal/modal.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestPasswordComponent,
    LoginComponent,
    RegisterQueryComponent,
    ModalComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
