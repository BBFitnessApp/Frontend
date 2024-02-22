import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '@auth0/auth0-angular';
import { mergeMap } from 'rxjs';


const API_URL = 'https://localhost:5001/api/User/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }


  getUserByEmail(email: string| undefined){

    if(email != undefined){

        return this.httpClient.get<User>(API_URL + 'getUserByEmail',{
         
          params: new HttpParams({ fromObject: { email: email } })
        })
      
    }

    return null;
      
  }

  postUser(user: User){


    return this.httpClient.post<User>(API_URL,user,httpOptions);


  }

  updateUser(user: User){

    return this.httpClient.put<User>(API_URL + user.id,user,httpOptions)
  }

}
