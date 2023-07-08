import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo_Data } from 'src/app/data_managment/article_data';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';

@Component({
  selector: 'app-article-metrics',
  templateUrl: './article-metrics.component.html',
  styleUrls: ['./article-metrics.component.css']
})
export class ArticleMetricsComponent implements OnInit {

  private url_get_authors_articles = "https://cvlacapi.onrender.com//articles/"; // URL buscar autores
  private investigator_id = this.route.snapshot.params['id']
  private article_index = this.route.snapshot.params['article_index']
  article_data!:any
  article_name!:string
  
 isLoaded = false

 
  

  constructor(private dataManagerService:DataManagerService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.investigator_id + "  -   " + this.article_index)
      this.dataManagerService.getArticlesData(this.url_get_authors_articles + this.investigator_id + "/" + this.article_index)
      .subscribe(article => {
        this.article_data = article;
        let list = this.article_data['Articulos']
        let data = list[0]
        this.article_name = data['nombre_articulo']
      this.isLoaded = true
    });
  }



}
