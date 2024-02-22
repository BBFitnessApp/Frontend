import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-macros',
  templateUrl: './macros.page.html',
  styleUrls: ['./macros.page.scss'],
})
export class MacrosPage implements OnInit {

  constructor(private alertController: AlertController) { }
 
  ngOnInit() {
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
