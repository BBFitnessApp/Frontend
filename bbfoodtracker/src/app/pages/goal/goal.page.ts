import {  Component, ElementRef, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  calories: string = "2000 Kalorien";
  calorieGoal: number | any = 2000;
  focusedButton: { element: HTMLButtonElement, text: string } | null = null;
  logged: User | undefined;
  specification: string | undefined = undefined;
  constructor(private elementRef: ElementRef,private router: Router,private userService: UserService,private authService: AuthService) { }

  ngOnInit() {
  }

  onButtonFocus(event: FocusEvent): void {
    const button = event.target as HTMLButtonElement;
    this.focusedButton = { element: button, text: button.textContent!.trim() };
    this.specification = this.focusedButton.text;
    console.log(this.focusedButton.text);
  }

  onIonChange(ev: Event) {

    this.calories =  (ev as RangeCustomEvent).detail.value + " Kalorien";
    this.calorieGoal = (ev as RangeCustomEvent).detail.value;

  }

 collectGoal(){

  this.authService.user$.subscribe(p => this.userService.getUserByEmail(p?.email)?.subscribe({

    next: data => {
      const { id, email, userName, age, weight, gender, zielSpezifikation, bmi, height, kalorienziel } = data;

      this.logged = {id: data.id, userName: data.userName, email: data.email, password: data.password, age: data.age, height: data.height, weight: data.weight, gender: data.gender, zielSpezifikation: this.specification, bmi: undefined, kalorienziel: this.calorieGoal}

      console.log(this.logged)

      this.userService.updateUser(this.logged).subscribe({
        next: data =>{

          this.router.navigate(['../tabs/tab1'])
        },
        error: err =>{

          console.log(err)
        }
      })
    }
  }))
 }


  
}
