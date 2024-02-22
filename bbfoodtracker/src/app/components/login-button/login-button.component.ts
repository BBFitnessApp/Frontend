import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-button',
  template: `<ion-button (click)="login()">Login</ion-button>`,
})
export class LoginButtonComponent {

  loggedUser: User | any;

  constructor(public auth: AuthService,private userSerivce: UserService) {}

 async login() {
   await this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          await Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();

     
      
  }
}