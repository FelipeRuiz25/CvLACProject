import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international-id-chart',
  templateUrl: './international-id-chart.component.html',
  styleUrls: ['./international-id-chart.component.css']
})
export class InternationalIdChartComponent implements OnInit {

  basicData: any;
  basicOptions: any;

  orcid = ['Orcid',56899]
  scopus =['Scopus',14380]
  webOfScience = ['WebOfScience',1653]
  others = ['Otros',156]
  
  constructor() {
    this.basicData = {
      labels: [this.orcid[0], this.scopus[0], this.webOfScience[0], this.others[0]],
      datasets: [
        {
          label: 'Cantidad articulos registrados',
          data: [this.orcid[1], this.scopus[1], this.webOfScience[1], this.others[1]]
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
            labelString: 'X-axis Label'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Y-axis Label'
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }
  ngOnInit(): void {
  }

}
