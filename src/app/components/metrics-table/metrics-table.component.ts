import { Component, Input, OnInit } from '@angular/core';
import { Articulo_Data } from 'src/app/data_managment/article_data';

@Component({
  selector: 'app-metrics-table',
  templateUrl: './metrics-table.component.html',
  styleUrls: ['./metrics-table.component.css']
})
export class MetricsTableComponent implements OnInit {
  

  @Input() article_data!:any
  data!: any

  @Input() percent_metadata!:number


  constructor() { }

  ngOnInit(): void {
  }


  isContented(value: any): boolean {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return value === null || value === undefined || value === ''
    }


}
