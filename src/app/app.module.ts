import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FormatPhonePipe } from './pipes/format-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShortenPipe,
    FormatPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    ShowHidePasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
