import { Component, Input, OnInit } from '@angular/core';
import { Articulo_Data } from 'src/app/data_managment/article_data';

@Component({
  selector: 'app-metrics-table',
  templateUrl: './metrics-table.component.html',
  styleUrls: ['./metrics-table.component.css']
})
export class MetricsTableComponent implements OnInit {
  

  @Input() article_data!:Articulo_Data
  @Input() percent_metadata!:number

  constructor() { }

  ngOnInit(): void {
  }


  isContented(value: any): string {
    if (value === null || value === undefined || value === '') {
      return "No registra";
    }else if(value == true){
      return "Registra"
    }
    return value
    }


}
