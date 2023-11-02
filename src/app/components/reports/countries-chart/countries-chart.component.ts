import { Component, OnInit } from '@angular/core';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Country_Report } from 'src/app/data_managment/country_report';
import { StatsServiceService } from 'src/app/stats-service.service';

@Component({
  selector: 'app-countries-chart',
  templateUrl: './countries-chart.component.html',
  styleUrls: ['./countries-chart.component.css'],
})


export class CountriesChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  data: any;
  countries_name_list!: string[];
  top_international_id: string[] = [];
  international_id_by_country_sorted:Country_Report[] = []
  private url_get_countries_report = 'https://cvlacapi.onrender.com//reports/identifiers/by_nation'; // URL reportes por pais
  isLoaded = false;



  constructor(private dataManagerService: DataManagerService ,private statsService: StatsServiceService) {
    if(this.isLoaded){
      this.set_graphics()
    } 
  }


  ngOnInit(): void {
      try {
        if(this.statsService.countriesChartLoaded == undefined){
          this.load_data()
        }else{
          this.data_loaded()
        }
             
      } catch (error) {
        
      }
    
  }

  load_data(){
    this.dataManagerService
          .getCountriesReportData(this.url_get_countries_report)
          .subscribe((report) => {
            this.data = report;
            this.statsService.countriesChartLoaded = report
            this.countries_name_list = Object.keys(this.data);
              this.get_top_international_id("colombiana");
            console.log("YYY",this.international_id_by_country_sorted);
            
            this.isLoaded = true;
            this.set_graphics()  
          }); 
  }

  data_loaded(){
    this.data = this.statsService.countriesChartLoaded;
    this.countries_name_list = Object.keys(this.data);
    this.get_top_international_id("colombiana");
    this.top_international_id.forEach(top_international_id_name => {
      this.get_data_from_international_id(top_international_id_name)
    });
    this.isLoaded = true;
    this.set_graphics()  

  }


  get_data_from_international_id(name_id_international:string):number[]{
    let data:number[] = []
    this.international_id_by_country_sorted.forEach(country_reports => {
      for (let i = 0; i < country_reports.get_list_internationa_id().length; i++) {
        if(this.extract_domain_name(country_reports.get_list_internationa_id()[i][0]) == name_id_international){
          data.push(country_reports.get_list_internationa_id()[i][1])
        }
      }     
    });
    return data
  }


  /**
   * Recorre el arreglo de todos los apises y almacena las bases de datos internacionales
   */
  is_in_top_international_id(country_name:string):void{
    if(!this.top_international_id.includes(country_name)){
      this.top_international_id.push(country_name)
    }
  }

  set_graphics() {
    console.log("PPPP" , this.international_id_by_country_sorted[0].get_list_internationa_id()[0][1]);
    
    this.basicData = {
      labels: ["Colombia"],
      datasets: [
        {
          label: this.extract_domain_name(this.international_id_by_country_sorted[0].get_list_internationa_id()[0][0]),
          data: [this.international_id_by_country_sorted[0].get_list_internationa_id()[0][1]]
        },
        {
          label:this.extract_domain_name(this.international_id_by_country_sorted[0].get_list_internationa_id()[1][0]),
          data: [this.international_id_by_country_sorted[0].get_list_internationa_id()[1][1]]
        },
        {
          label: this.extract_domain_name(this.international_id_by_country_sorted[0].get_list_internationa_id()[2][0]),
          data: [this.international_id_by_country_sorted[0].get_list_internationa_id()[2][1]]
        },
        {
          label: this.extract_domain_name(this.international_id_by_country_sorted[0].get_list_internationa_id()[3][0]),
          data: [this.international_id_by_country_sorted[0].get_list_internationa_id()[3][1]]
        },
      ],
    };
  
    this.basicOptions = {
      title: {
        display: true,
        text: 'Histograma',
      },
      legend: {
        position: 'top',
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Países',
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Valores',
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10, // Incremento de 10 en el eje Y
            },
          },
        ]
      },
    };
  }
  /**
   * Obtiene los 3 principales bases de datos registradas del pais
   * @param country_name
   */
  get_top_international_id(country_name: string) {
    let top_length = 3;
    let top_list = [];
    let count_others: number = 0; //Variable para agrupar los demas valores fuera del top 3
    let international_id_by_country = this.data[country_name];
    const sortedData = Object.entries(international_id_by_country).sort(
      (a: any, b: any) => b[1] - a[1]
    );
    let result!: any;
    // Agrupar el resto de las llaves en el item "Other" y sumar sus valores
    if (sortedData.length > top_length) {
      for (let i = 0; i < sortedData.length; i++) {
        if (i < top_length) {
          top_list[i] = sortedData[i];
          this.is_in_top_international_id(this.extract_domain_name(top_list[i][0]))
        } else {
          while (i < sortedData.length) {
            let value = sortedData[i][1];
            count_others += Number(value);
            i++;
          }
        }
      }
      top_list[top_length] = ['Other', count_others];
    } else {
      top_list = sortedData;
    }
    this.international_id_by_country_sorted.push(new Country_Report(country_name,top_list))
    // console.log(this.top_international_id)

  }
  

  /**
   * Limpia el nombre del dominio
   * @param fullDomain
   * @returns
   */
  extract_domain_name(text: string): string {
    const substringsToRemove = [".org", "www.", ".com"];
    let result = text;
    for (const substring of substringsToRemove) {
      result = result.replace(new RegExp(substring, "gi"), "");
    }  
    return result;
  }


 

}
