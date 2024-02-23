import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-apex-linechart',
  templateUrl: './apex-linechart.component.html',
  styleUrls: ['./apex-linechart.component.scss'],
})
export class ApexLinechartComponent  implements OnInit {

  @Input() button: number | any;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  categories: string[] | any;

  constructor() { }

  ngOnInit() {

    if(this.button == 0){

      this.categories = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]
    }
    else if(this.button == 1){

      this.categories = ["Mon","Thu","Wed","Thur","Fri","Sat","Sun"]
    }
    else if(this.button == 2){

      this.categories = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
    }
    else if(this.button == 3){

      this.categories = ["Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep","Oct","Nov","Dec"]
    }

    this.chartOptions = {
      series: [
        {
          name: "Kalorien",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          color: "#2918A8"
        },
        {
          name: "Proteine",
          data: [20, 21, 35, 11, 29, 32, 29, 71, 108],
          color: "#60C914"
          
        },
        {

          name: "Fette",
          data: [40, 31, 15, 20, 30, 32, 23, 88, 118],
          color: "#f0ae59"

        },
        {

          name: "Carbs",
          data: [5, 11, 5, 30, 20, 12, 43, 68, 99],
          color: "#ad1e0e"

        }
       
      ],
      chart: {
        height: 250,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width:[2,2,2,2],
        curve: "straight"
      },
      tooltip: {

        theme:false

      },
      title: {
        text: "Makros",
        align: "left"
      },
      grid: {
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      },
    };
  }

}
