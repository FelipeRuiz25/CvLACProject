import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-metrics',
  templateUrl: './article-metrics.component.html',
  styleUrls: ['./article-metrics.component.css']
})
export class ArticleMetricsComponent implements OnInit {
  
  example_investigator = {
    full_name: "Juan Sebastian Gonzales",
    number_articles: 0,
    number_projects: 0,
    category: "Junior"
  };
  
  list_articles = []

  @Input() article_name!:string

  constructor() { }

  ngOnInit(): void {
  }

}
