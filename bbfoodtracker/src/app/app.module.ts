import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import config from '../../capacitor.config';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';


const redirect_uri = `${config.appId}://dev-3tdsdhc4kc6o1ti4.eu.auth0.com/capacitor/${config.appId}/callback`;


@NgModule({
  declarations: [AppComponent,LoginButtonComponent,LogoutButtonComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  AuthModule.forRoot({
    domain: 'dev-3tdsdhc4kc6o1ti4.eu.auth0.com',
    clientId: 'I78KCPRNcOf0rFh98wiT5nSSeSq6QoaJ',
    useRefreshTokens: true,
    useRefreshTokensFallback: false,
    authorizationParams: {
      redirect_uri: window.location.origin,
      
    }
  }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
