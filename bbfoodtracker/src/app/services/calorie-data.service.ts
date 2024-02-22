import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '@auth0/auth0-angular';
import { mergeMap } from 'rxjs';
import { CalorieData } from '../models/calorie-data.model';


const API_URL = 'https://localhost:5001/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CalorieDataService {

  constructor(private http: HttpClient, private authService: AuthService) { }


  postCalorieData(calorieData: CalorieData){

    return this.http.post<CalorieData>(API_URL+'post',calorieData,httpOptions);
  }
}
