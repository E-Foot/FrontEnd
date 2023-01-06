import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { PrimeNGConfig } from 'primeng/api';
import { donutChart } from './donutChart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  donutChart = new Chart(donutChart)
}
