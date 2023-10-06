import { Component, Input, OnInit } from '@angular/core';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';

@Component({
  selector: 'app-article-puntuation-chart',
  templateUrl: './article-puntuation-chart.component.html',
  styleUrls: ['./article-puntuation-chart.component.css']
})
export class ArticlePuntuationChartComponent implements OnInit {

  data!: Object;
  chartOptions: any;
  @Input() isLoaded!: boolean
  @Input() article_points!:number
  @Input() article_name!:string

  private url_get_countries_report = 'https://cvlacapi.onrender.com/reports/rate_articles'; // URL reportes porcentaje por puntos 
  data_points: DataPoints= {
    "1 - 5  puntos" : 0,
    "6 - 10  puntos" : 0, 
    "11 - 15  puntos" : 0,
    "16 - 20  puntos" : 0
  }


  constructor(private dataManagerService: DataManagerService) {}

  ngOnInit(): void {
    this.dataManagerService.getArticlesData(this.url_get_countries_report)
    .subscribe(report_global_puntuation => {
      this.data = report_global_puntuation;  
      this.get_article_range()
      this.set_chart()
      this.isLoaded = true
    });
  }

  set_chart() {
    this.data = {
      labels: Object.keys(this.data_points),
      datasets: [
        {
          data: Object.values(this.data_points),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF9F40",
          ],
          hoverBackgroundColor: [
            "#CC4C6D",
            "#2E87BE",
            "#CCB542",
            "#CC7732",
          ],
        },
      ],
    };
  }
  


  /**
   * Para dar detalle del reporte al lado de la grafica identificamos en que rango esta 
  */
  get_article_range(){
    let values_by_range = [0,0,0,0]
    for (let i = 0; i < Object.keys(this.data).length; i++) {
      if(i > 0 && i < 6){
        values_by_range[0] = values_by_range[0] + (Object.values(this.data)[i] ) 
      }else if(i > 5  && i < 11){
        values_by_range[1] = values_by_range[1] + (Object.values(this.data)[i] ) 
      }else if(i > 10  && i < 16){
        values_by_range[2] = values_by_range[2] + (Object.values(this.data)[i] )
      }else{
        values_by_range[3] = values_by_range[3] + (Object.values(this.data)[i] )
      }
    }
    let keys = Object.keys(this.data_points);
    keys.forEach((key, index) => {
      this.data_points[key] = values_by_range[index];
    }); 
  }
  
  get_puntuation_range(){
      if(this.article_points > 0 && this.article_points < 6){
        return this.data_points[0]
      }else if(this.article_points > 5 && this.article_points < 11){
        return this.data_points[1]
      }else if(this.article_points > 10 && this.article_points < 16){
        return this.data_points[2]
      }else{
        return this.data_points[3]
      }
  }
}


interface DataPoints {
  [key: string]: number;
}
