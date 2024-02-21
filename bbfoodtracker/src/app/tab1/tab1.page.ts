import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  
    daysOfWeek = [
    'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
  ];
  
   
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

  ngOnInit(): void {


    
  }

  constructor() {

  

    let day = new Date();
    let dayNumber = day.getDate();
    let dayOfWeek = this.daysOfWeek[day.getDay()];
    let currentMonthIndex = day.getMonth();

    


    this.currentDate = dayOfWeek + ", " + dayNumber +". " + this.monthAbbreviations[currentMonthIndex]
  }

}
