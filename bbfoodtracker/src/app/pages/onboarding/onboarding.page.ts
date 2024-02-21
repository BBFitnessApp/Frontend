import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  age: number | any;
  form: FormGroup | any;

  constructor(private router: Router,private formBuilder: FormBuilder) { 

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
    this.router.navigate(['/goal']);

  }

}
