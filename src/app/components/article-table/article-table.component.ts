import { Component, OnInit, Input } from '@angular/core';
import { Article_Author } from 'src/app/data_managment/authors-articles';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';
import { Investigator_Cv } from 'src/app/data_managment/investigator_cv';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})


export class ArticleTableComponent implements OnInit{


 @Input() author_info!:Investigator_Cv
 @Input() url_body!:string

 isLoaded = false
 
 list_articles!:Article_Author[]

 constructor(){
 
  /**/
 }

  ngOnInit(): void {
    console.log(this.author_info)
    this.list_articles = this.author_info.Articulos
    this.isLoaded = true
  }


  

  redirectToArticleData(article_index:number): void {
    this.url_body = window.location.href.replace('cvview', 'article_metrics');
    const url = this.url_body + "/" + article_index;
    window.location.href = url;
  }



 
  


}