import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { CalorieData } from 'src/app/models/calorie-data.model';
import { User } from 'src/app/models/user.model';
import { CalorieDataService } from 'src/app/services/calorie-data.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-macros',
  templateUrl: './macros.page.html',
  styleUrls: ['./macros.page.scss'],
})
export class MacrosPage implements OnInit {

  form: FormGroup | any;
  logged: User | undefined;


  constructor(private alertController: AlertController,private formBuilder: FormBuilder,private authService: AuthService,private userService: UserService, private calorieDataService: CalorieDataService,private router: Router) { 

    this.form = formBuilder.group({
      calories:['',Validators.required],
      proteins:['',Validators.required],
      fats:['',Validators.required],
      carbs:['',Validators.required]

    })

  }
 
  ngOnInit() {
  }


  onSubmit(formData: any){

    console.log(formData)
    let calories: number = this.form.get('calories').value
    let proteins: number = this.form.get('proteins').value
    let fats: number = this.form.get('fats').value
    let carbs: number = +this.form.get('carbs').value

    this.authService.user$.subscribe(p => this.userService.getUserByEmail(p?.email)?.subscribe({
      next: data => {

        this.logged = data;
        if(this.logged.id != undefined){

          let calorieData: CalorieData = {id: undefined, userId: this.logged.id, datum: new Date(), kalorienaufnahme: calories, proteine: proteins, fette: fats, kohlenhydrate: carbs }
          console.log(calorieData)
          this.calorieDataService.postCalorieData(calorieData).subscribe({

            next: data => {

              console.log("Success" + data)
              this.router.navigate(['../tabs/tab1'])
              
            },
            error: err => {

              console.log(err)
            }
          })


        }
      }


    }))

  


  }



  async startScanner(){

    BarcodeScanner.prepare();
    const allowed = await this.checkPermission();
    if(allowed){

      const result = await BarcodeScanner.startScan();
    if(result.hasContent){

      console.log(result);

    }

    }
    
  }

  async checkPermission(){

    const status = await BarcodeScanner.checkPermission({force: true});
    if(status.granted) {
      
      return true;
    }else if(status.denied){

      const alert = await this.alertController.create({
        header: 'Kein Zugriff',
        message: 'Bitte erlauben Sie den Kamerazugriff in Ihren Einstellungen',
        buttons: [{
          text: 'Nein',
          role: 'cancel'
        },
      {

        text: 'Einstellungen öffnen',
        handler: () => {

          BarcodeScanner.openAppSettings();

        }

      }]
      })

      await alert.present();
    }

      return false;
    
  }

}
