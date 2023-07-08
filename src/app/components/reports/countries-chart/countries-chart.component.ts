import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-chart',
  templateUrl: './countries-chart.component.html',
  styleUrls: ['./countries-chart.component.css']
})
export class CountriesChartComponent {

  basicData: any;
  basicOptions: any;

  orcid = ['Orcid',56899]
  scopus =['Scopus',14380]
  webOfScience = ['WebOfScience',1653]
  others = ['Otros',156]
  
    constructor() {
      this.basicData = {
        labels: ['Colombia', 'Brazil', 'Argentina', 'Otro'],
        datasets: [
          {
            label: 'ORCID',
            data: [10, 15, 8, 5]
          },
          {
            label: 'Scopus',
            data: [5, 8, 12, 3]
          },
          {
            label: 'WebOfScience',
            data: [8, 10, 6, 2]
          },
          {
            label: 'Otros',
            data: [4, 6, 3, 1]
          }
        ]
      };
  
      this.basicOptions = {
        title: {
          display: true,
          text: 'Histograma'
        },
        legend: {
          position: 'top'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Países'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Valores'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
    }
  }

