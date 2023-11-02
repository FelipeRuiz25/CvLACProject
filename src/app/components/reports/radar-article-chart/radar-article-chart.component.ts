import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';
import { StatsServiceService } from 'src/app/stats-service.service';


@Component({
  selector: 'app-radar-article-chart',
  templateUrl: './radar-article-chart.component.html',
  styleUrls: ['./radar-article-chart.component.css']
})
export class RadarArticleChartComponent  {

  radarData: any;
  radarOptions: any;
  private url_radar_metadata_report = "https://cvlacapi.onrender.com//reports/metadata"
  isLoaded!:boolean
  data_article:Metadata_Report = {}
  total_articles = Object.keys(this.data_article).length
  id_most_used = "ORCID"
  id_most_used_count = 153
  top_metadata_used:string[] = [] 
  less_metadata_used :string[] = [] 

  constructor(private dataManagerService: DataManagerService, private statsServices: StatsServiceService) {

  }

  ngOnInit(): void {
    try {
      if(this.statsServices.radarArticleChartLoaded == undefined){
        this.load_data()
      }else{
        this.data_loaded()
      }
           
    } catch (error) {

    }
}

  load_data(){
    this.dataManagerService.getArticlesData(this.url_radar_metadata_report)
    .subscribe(report_global_puntuation => {
      this.statsServices.radarArticleChartLoaded = report_global_puntuation
      if(report_global_puntuation != undefined){
        Object.keys(report_global_puntuation).forEach(key_name => {
          this.get_total_count_metadata(key_name,report_global_puntuation);
        });         
        this.isLoaded = true
        this.set_data()
        this.set_chart()

      }
    });
  }

  data_loaded(){
    let report_global_puntuation = this.statsServices.radarArticleChartLoaded
    if(report_global_puntuation != undefined){
      Object.keys(report_global_puntuation).forEach(key_name => {
        this.get_total_count_metadata(key_name,report_global_puntuation);
      });         
      this.isLoaded = true
      this.set_data()
      this.set_chart()
    }
  }

    set_chart(){
      try{
      this.radarData = {      
        labels : Object.keys(this.data_article),
        datasets: [
          {
            label: 'Total Artículos',
            data: Object.values(this.data_article),
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
    }catch(error){

    }
    }


    /**
     * Obtiene la información por paises, recorre los diferentes llaves y suma los valores para totalizarlos
     * @param key_name 
     * @param report_data 
     */
    get_total_count_metadata(key_name:string,report_data:any){
      let total_articles = 0
      Object.values(report_data[key_name]).forEach(element => {
        total_articles += Number(element)
      });
      this.data_article[key_name] = total_articles
    }


    set_data(){
      const sorted_data = Object.entries(this.data_article).sort(
        (a: any, b: any) => b[1] - a[1]
      );    
      console.log(sorted_data)
      let index = 0
      for (let i = 0; i < sorted_data.length; i++) {
        if(i < 4){
          this.top_metadata_used[i] = ("" + sorted_data[i][0]).toLowerCase()  ;        
        }else{
          this.less_metadata_used[index] = ("" + sorted_data[i][0]).toLowerCase()  ;   
          index+=1
        }
      }
      console.log(this.top_metadata_used);
      
    }

}






interface Metadata_Report {
  [key: string]: number;
}

