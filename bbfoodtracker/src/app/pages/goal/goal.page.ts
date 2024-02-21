import {  Component, ElementRef, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  calories: string = "2000 Kalorien";
  focusedButton: { element: HTMLButtonElement, text: string } | null = null;
  constructor(private elementRef: ElementRef,private router: Router) { }

  ngOnInit() {
  }

  onButtonFocus(event: FocusEvent): void {
    const button = event.target as HTMLButtonElement;
    this.focusedButton = { element: button, text: button.textContent!.trim() };

    console.log(this.focusedButton.text);
  }

  onIonChange(ev: Event) {

    this.calories =  (ev as RangeCustomEvent).detail.value + " Kalorien";
  }

 collectGoal(){

  this.router.navigate(['../tabs/tab1'])
 }


  
}
