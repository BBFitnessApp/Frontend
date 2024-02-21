import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  labels: string[];
  plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-apex-radialbarchart',
  templateUrl: './apex-radialbarchart.component.html',
  styleUrls: ['./apex-radialbarchart.component.scss'],
})


export class ApexRadialbarchartComponent  implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;
  @Input() color = "";
  @Input() label = "";


  constructor() { 

    
  }

  ngOnInit() {

    this.chartOptions = {
      series: [70],
      chart: {
        height: 150,
        type: "radialBar",
        width: 120
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      colors: [this.color],
      labels: [this.label]
    };
  }

}
