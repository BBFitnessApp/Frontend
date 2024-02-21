import { Component, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() { }

  ngOnInit() {

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
