import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  form: FormGroup | any;
  logged: User | undefined;

  constructor(private router: Router,private formBuilder: FormBuilder,private userService: UserService,private authService: AuthService) { 

    this.form = formBuilder.group({
      age: ['',Validators.compose([Validators.min(10), Validators.max(100),Validators.required])],
      height: ['', Validators.compose([Validators.min(100),Validators.max(200),Validators.required])],
      weight:['', Validators.compose([Validators.min(50), Validators.max(150),Validators.required])],
      gender:['',Validators.required]

    })

    
  }

  ngOnInit() {
  }


  CollectData(){


  }

  onSubmit(formData: any) {
    console.log(formData);

    let updatedAge: number = this.form.get('age').value
    let updatedHeight: number = this.form.get('height').value
    let updatedWeight: number = this.form.get('weight').value
    let updatedGender: number = +this.form.get('gender').value


   this.authService.user$.subscribe(userProfile => this.userService.getUserByEmail(userProfile?.email)?.subscribe({

      next: data => {
        const { id, email, userName, age, weight, gender, zielSpezifikation, bmi, height, kalorienziel } = data;

        console.log(data.email);
        this.logged = {id: data.id, userName: data.userName, email: data.email, password: data.password, age: updatedAge, height: updatedHeight, weight: updatedWeight, gender: updatedGender, zielSpezifikation: undefined, bmi: undefined, kalorienziel: undefined}
      
        console.log(this.logged)

        this.userService.updateUser(this.logged).subscribe({
          next: data => {

            this.router.navigate(['../goal'])
          },
          error: err => {

            console.log(err)
          }
        })

      },
      error: err => {
        console.log(err);
      }
    }))


  }

}
