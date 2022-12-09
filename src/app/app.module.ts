import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StadesComponent } from './stades/stades.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { Us06Component } from './us06/us06.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    StadesComponent,
    Us06Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [
     {provide: 'BaseURL', useValue: baseURL}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
