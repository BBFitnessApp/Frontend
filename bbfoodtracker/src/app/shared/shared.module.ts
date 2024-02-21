import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexRadialbarchartComponent } from '../charts/apex-radialbarchart/apex-radialbarchart.component';
import { ApexLinechartComponent } from '../charts/apex-linechart/apex-linechart.component';
import { ApexGaugeComponent } from '../charts/apex-gauge/apex-gauge.component';


@NgModule({
 imports:      [ CommonModule,NgApexchartsModule ],
 declarations: [ApexRadialbarchartComponent,ApexLinechartComponent,ApexGaugeComponent  ],
 exports:      [ 
                 CommonModule, FormsModule, ApexRadialbarchartComponent,ApexLinechartComponent,ApexGaugeComponent ]
})
export class SharedModule { }