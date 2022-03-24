import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { SuccessComponent } from './alert/success/success.component';
import { WarningAlert } from './alert/warning/warning.component';
import { FormsModule } from '@angular/forms';
import { SecretComponent } from './secret/secret.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    WarningAlert,
    SuccessComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
