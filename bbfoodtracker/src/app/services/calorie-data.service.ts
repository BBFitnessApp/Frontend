import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '@auth0/auth0-angular';
import { mergeMap } from 'rxjs';
import { CalorieData } from '../models/calorie-data.model';
import { DateTransformServiceService } from './date-transform-service.service';


const API_URL = 'https://localhost:5001/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CalorieDataService {

  constructor(private http: HttpClient, private authService: AuthService,private dateTransformService: DateTransformServiceService) { }


  postCalorieData(calorieData: CalorieData){

    return this.http.post<CalorieData>(API_URL+'CalorieData/AddCalorieData',calorieData,httpOptions);
  }

  getCalorieIntakeByDay(email: string){

    const currentTime = new Date();
    const transformedDate = this.dateTransformService.transformDate(currentTime);
    
    if(email != undefined){
      return this.http.get<CalorieData>(API_URL+'CalorieData/CalorieIntakeByToday/'+email+'/'+transformedDate)

    }

    return null;
 
  }

  getProteinsIntakeByDay(email:string){

    if(email != undefined){

      return this.http.get<CalorieData>(API_URL+'CalorieData/ProteinIntakeByToday/'+email)
    }

    return null;
  }

  getFatsIntakeByDay(email: string){

    


    if(email != undefined){

      return this.http.get<CalorieData>(API_URL+'CalorieData/FetteIntakeByToday/'+email)
    }
    return null;
  }

  getCarbsIntakeByDay(email: string){

    const currentTime = new Date();
    const transformedDate = this.dateTransformService.transformDate(currentTime);

    if(email != undefined){

      return this.http.get<CalorieData>(API_URL+'CalorieData/KohlenhydrateByDay/'+email+'/'+transformedDate)
    }

    return null;
  }
  
}
