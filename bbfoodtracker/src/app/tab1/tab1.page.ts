import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { delay, filter, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

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
    
   
    
  }

  constructor(private authService: AuthService,private userService: UserService, private router: Router) {

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
         this.sendData();
      }
    });



    this.authService.user$.subscribe(userProfile => console.log(userProfile))
    
  
    let day = new Date();
    let dayNumber = day.getDate();
    let dayOfWeek = this.daysOfWeek[day.getDay()];
    let currentMonthIndex = day.getMonth();

    


    this.currentDate = dayOfWeek + ", " + dayNumber +". " + this.monthAbbreviations[currentMonthIndex]
  }
 
  sendData(){

    let userName: string | any;
    let email : string | any;
    console.log("Bin drinnen")

   /* this.authService.user$
    .pipe(
      delay(1000) // Delay for 1 second (adjust the time as needed)
    )
    .subscribe(user => {
      if (user) {
        userName = user.name;
        email = user.email;
        let logged : User = {userName: userName, email: email, id: undefined, password: undefined, weight: undefined, zielSpezifikation: undefined, age: undefined, gender: undefined, bmi: undefined, height: undefined, kalorienziel: undefined};

        this.authService.user$.subscribe(userProfile => this.userService.getUserByEmail(userProfile?.email)?.subscribe({
          next: data => {
    
           this.loggedUser = data;
           console.log(this.loggedUser)
           this.persisted = true;
          },
          error: err => {
            this.persisted = false;
    
            console.log(this.persisted)
    
          }
        }));
        this.userService.postUser(logged).subscribe({
          next: data => {
 
            console.log(data + "Success")
          },
          error: err => {
 
            console.log(err)
          }
        })

        console.log(userName);
      } else {
        userName = ''; // User is not logged in, clear the userName
      }
    });
     */

    this.authService.user$.subscribe(userProfile => {

      if (userProfile){

        this.userService.getUserByEmail(userProfile.email)?.subscribe({
          next: data => {

            this.loggedUser = data;
            console.log(this.loggedUser)
         

          },
          error: err =>{

            console.log(err);
            if(userProfile.name != undefined && userProfile.email != undefined) {
    
              let logged : User = {userName: userProfile.name, email: userProfile.email, id: undefined, password: undefined, weight: undefined, zielSpezifikation: undefined, age: undefined, gender: undefined, bmi: undefined, height: undefined, kalorienziel: undefined};
    
    
              this.userService.postUser(logged).subscribe({
    
                next: data => {
    
                  console.log(data)
                  this.router.navigate(['../onboarding'])
                },
                error: err => {
    
                  console.log(err)
                }
              })
            }



            
          }
        })
      
      }
    })

   

  }


  addUser(){

    
  }
}
