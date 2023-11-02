import { Component, OnInit } from '@angular/core';
import { Country_Report } from 'src/app/data_managment/country_report';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';
import { StatsServiceService } from 'src/app/stats-service.service';

@Component({
  selector: 'app-international-id-chart',
  templateUrl: './international-id-chart.component.html',
  styleUrls: ['./international-id-chart.component.css']
})
export class InternationalIdChartComponent implements OnInit {

  basicData: any;
  basicOptions: any;
  private url_get_countries_report = 'https://cvlacapi.onrender.com//reports/identifiers/by_nation'; // URL reportes por pais
  data: any;
  countries_name_list!: string[];
  international_id_by_country_sorted:Country_Report[] = []
  top_international_id: string[] = [];
  isLoaded = false;
  sortedData:any





 
  
  constructor(private dataManagerService: DataManagerService,private statsService: StatsServiceService) {  }


  set_chart(){
    let top_1 = [this.sortedData[0][0],this.sortedData[0][1]]
    let top_2 = [this.sortedData[1][0],this.sortedData[1][1]]
    let top_3 = [this.sortedData[2][0],this.sortedData[2][1]]
    let top_4 = [this.sortedData[3][0],this.sortedData[3][1]]
    let others = [this.sortedData[4][0],this.sortedData[4][1]]

    this.basicData = {
      labels: [top_1[0], top_2[0], top_3[0], top_4[0],others[0]],
      datasets: [
        {
          label: 'Cantidad identificadores internacionales registrados',
          data: [top_1[1], top_2[1], top_3[1], top_3[1], others[1]]
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
    try {
      if(this.statsService.internationalIdChartLoaded == undefined){
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
      this.statsService.internationalIdChartLoaded = report
      this.countries_name_list = Object.keys(this.data);
      this.countries_name_list.forEach(country => {
        this.get_top_international_id(country);
      });
      const top_data:any = {}
      this.top_international_id.forEach(top_international_id_name => {
        top_data[top_international_id_name] = this.get_data_from_international_id(top_international_id_name)
      });
      top_data['Other'] = this.get_data_from_international_id("Other") //añade el item Others 
      this.sortedData = Object.entries(top_data).sort(
        (a: any, b: any) => b[1] - a[1]
      );  
      this.isLoaded = true;
      console.log("top" , this.sortedData);
      this.set_chart()
    });
  }

  data_loaded(){
    this.data = this.statsService.internationalIdChartLoaded;
    this.statsService.internationalIdChartLoaded = this.data    
    this.countries_name_list = Object.keys(this.data);
    this.countries_name_list.forEach(country => {
      this.get_top_international_id(country);
    });
    const top_data:any = {}
    this.top_international_id.forEach(top_international_id_name => {
      top_data[top_international_id_name] = this.get_data_from_international_id(top_international_id_name)
    });
    this.isLoaded = true;
    this.set_chart()
  }


  /**
   * Obtiene los 3 principales bases de datos registradas del pais
   * @param country_name
   */
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
    // console.log(country_name,this.international_id_by_country_sorted);

  }




  /**
   * Recorre el arreglo de todos los apises y almacena las bases de datos internacionales
   */
    is_in_top_international_id(country_name:string):void{
      if(!this.top_international_id.includes(country_name)){
        this.top_international_id.push(country_name)
      }
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

    
    /**
     * Segun el nombre de la base de datos internacional obtiene los valores de esa base de datos de cada pais
     * @param name_id_international 
     * @returns 
     */
    get_data_from_international_id(name_id_international:string):number{
      let total_count_item_serached:number = 0
      this.international_id_by_country_sorted.forEach(country_reports => {
        for (let i = 0; i < country_reports.get_list_internationa_id().length; i++) {
          if(this.extract_domain_name(country_reports.get_list_internationa_id()[i][0]) == name_id_international){
            total_count_item_serached += country_reports.get_list_internationa_id()[i][1]
          }
        }     
      });
      return total_count_item_serached
    }
}
