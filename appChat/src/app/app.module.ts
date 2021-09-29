import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { CommunicationService } from './services/communication.service';
import { PageService } from './services/page.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config:SocketIoConfig = {url: 'http://localhost:3000', options:{}}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, SocketIoModule.forRoot(config)],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    AuthService,
    UserService,
    CommunicationService,
    PageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
