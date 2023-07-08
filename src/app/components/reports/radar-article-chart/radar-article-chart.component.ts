import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-article-chart',
  templateUrl: './radar-article-chart.component.html',
  styleUrls: ['./radar-article-chart.component.css']
})
export class RadarArticleChartComponent  {

  radarData: any;
  radarOptions: any;

  data = 
    {
      'Revista Editorial' : 87500,
      'Tipo de Artículo':84410, 
      'Autor':88653,
      'Fecha de Publicación':86497,
      'Marca de Validación':85648,
      'Autores':79464, 
      'DOI':78562, 
      'Volumen':81632,
      'ISSN':80789
    }
  

  constructor() {

    this.radarData = {      
      labels : Object.keys(this.data),
      datasets: [
        {
          label: 'Total Artículos',
          data: Object.values(this.data),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },
      ]
    };

    this.radarOptions = {
      title: {
        display: true,
        text: 'Gráfico de Radar'
      },
      scale: {
        ticks: {
          beginAtZero: true
        }
      }
    };
  }

}
