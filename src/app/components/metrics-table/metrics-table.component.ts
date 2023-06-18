import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics-table',
  templateUrl: './metrics-table.component.html',
  styleUrls: ['./metrics-table.component.css']
})
export class MetricsTableComponent implements OnInit {

  article_metrics_example = {
    "Title": true,
    "Date": true,
    "Identifier": true,
    "Keywords": true,
    "Relation": true,
    "Description": true,
    "Author": true,
    "Rights": true,
    "Language": true,
    "Other Contributors": true,
    "Editor": true,
    "Resource Type": true,
    "Source": true
}


  constructor() { }

  ngOnInit(): void {
  }

}
