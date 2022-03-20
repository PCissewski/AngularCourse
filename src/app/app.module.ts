import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertComponent } from './alert/alert.component';
import { WarningAlert } from './alert/warning/warning.component';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './alert/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent,
    WarningAlert,
    SuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
