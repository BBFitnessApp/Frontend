import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { delay, filter, take } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CalorieDataService } from '../services/calorie-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  view: number = 0;
  calories: string = "";
  proteins: number | any;
  carbs: number | any;
  fats: number | any;
  caloriesNumber: number | any ;
  calorieGoal: string = "";
  currentUser: string = "";
    daysOfWeek = [
    'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
  ];

  loggedUser: User | undefined;
  persisted: boolean = false;
   
    monthAbbreviations: string[] = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ];

  currentDate: string= "";

  ngOnInit():void  {
    
    this.authService.isAuthenticated$.subscribe(async isAuthenticated => {
      if (isAuthenticated) {
        await this.sendData();

      }
    });

   
    
  }

  constructor(private authService: AuthService,private userService: UserService, private router: Router,private loadingCtrl: LoadingController,private calorieDataService: CalorieDataService) {

    



    this.authService.user$.subscribe(userProfile => console.log(userProfile))
    
  
    let day = new Date();
    let dayNumber = day.getDate();
    let dayOfWeek = this.daysOfWeek[day.getDay()];
    let currentMonthIndex = day.getMonth();

    


    this.currentDate = dayOfWeek + ", " + dayNumber +". " + this.monthAbbreviations[currentMonthIndex]
  }

  changeView(button: number) {

      
      this.view = button;
    
    }


  async sendData(){

    let userName: string | any;
    let email : string | any;
    console.log("Bin drinnen")

    const loading = await this.loadingCtrl.create({
      message:'Fetching data...'
    });

    loading.present();

  
    this.authService.user$.subscribe(userProfile => {

      if (userProfile){

        this.userService.getUserByEmail(userProfile.email)?.subscribe({
          next: data => {

            this.loggedUser = data;
            this.calorieGoal = "von " + this.loggedUser?.kalorienziel + " Kalorien"
            
            this.calorieDataService.getCarbsIntakeByDay(this.loggedUser.email)?.subscribe({

              next: data => {

                  this.carbs = data;
              },
              error: err => {

                console.log(err)
              }
            })

            this.calorieDataService.getFatsIntakeByDay(this.loggedUser.email)?.subscribe({

              next: data =>{

                this.fats = data;
              },
              error: err => {

                console.log(err)
              }
            })

            this.calorieDataService.getProteinsIntakeByDay(this.loggedUser.email)?.subscribe({

              next: data => {

                this.proteins = data;
              },
              error: err =>{

                  console.log(err)
              }
            })
            this.calorieDataService.getCalorieIntakeByDay(this.loggedUser.email)?.subscribe({

              next: data => {

                this.calories= data + ' Kalorien';
                this.caloriesNumber = data;
              },
              error: err => {
                console.log(err)
              }
            })

            loading.dismiss();

          },
          error: err =>{

            console.log(err);
            if(userProfile.name != undefined && userProfile.email != undefined) {
    
              let logged : User = {userName: userProfile.name, email: userProfile.email, id: undefined, password: undefined, weight: undefined, zielSpezifikation: undefined, age: undefined, gender: undefined, bmi: undefined, height: undefined, kalorienziel: undefined};
    
    
              this.userService.postUser(logged).subscribe({
    
                next: data => {
    
                  console.log(data)
                  loading.dismiss();
                  this.router.navigate(['../onboarding'])
                },
                error: err => {
    
                  console.log(err)
                  loading.dismiss();
                }
              })
            }



            
          }
        })
      
      }
    })



  }


  addMacro(){

        this.router.navigate(['../macros'])
  }
}
