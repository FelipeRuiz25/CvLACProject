import {Component, Input, OnInit} from '@angular/core';
import {Articulo_Data} from 'src/app/data_managment/article_data';

@Component({
  selector: 'app-metrics-table',
  templateUrl: './metrics-table.component.html',
  styleUrls: ['./metrics-table.component.css']
})
export class MetricsTableComponent implements OnInit {

  cvlac_view = false
  @Input() article_data!: Articulo_Data
  @Input() percent_metadata!: number
  @Input() article_cvlac_html!: string

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.article_data)
  }
}
