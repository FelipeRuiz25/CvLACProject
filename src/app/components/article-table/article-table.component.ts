import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})


export class ArticleTableComponent {

  constructor() { }

    articles: Article[] = [
    new Article("IDENTIFICATION OF DC MOTOR WITH PARAMETRIC METHODS AND ARTIFICIAL NEURAL NETWORKS",
     "AGUSTIN SOTO OTALORA, JUNIOR FRANCISCO QUIJANO MOSOS, OSCAR MAURICIO LOSADA TOVAR",
     "1819-6608", "10.1016/j.fluid.2010.06.015"),
     new Article("IDENTIFICATION OF DC MOTOR WITH PARAMETRIC METHODS AND ARTIFICIAL NEURAL NETWORKS",
     "AGUSTIN SOTO OTALORA, JUNIOR FRANCISCO QUIJANO MOSOS, OSCAR MAURICIO LOSADA TOVAR",
     "1819-6608", "10.1016/j.fluid.2010.06.015"),
     new Article("IDENTIFICATION OF DC MOTOR WITH PARAMETRIC METHODS AND ARTIFICIAL NEURAL NETWORKS",
     "AGUSTIN SOTO OTALORA, JUNIOR FRANCISCO QUIJANO MOSOS, OSCAR MAURICIO LOSADA TOVAR",
     "1819-6608", "10.1016/j.fluid.2010.06.015"),
     new Article("IDENTIFICATION OF DC MOTOR WITH PARAMETRIC METHODS AND ARTIFICIAL NEURAL NETWORKS",
     "AGUSTIN SOTO OTALORA, JUNIOR FRANCISCO QUIJANO MOSOS, OSCAR MAURICIO LOSADA TOVAR",
     "1819-6608", "10.1016/j.fluid.2010.06.015"),
     new Article("IDENTIFICATION OF DC MOTOR WITH PARAMETRIC METHODS AND ARTIFICIAL NEURAL NETWORKS",
     "AGUSTIN SOTO OTALORA, JUNIOR FRANCISCO QUIJANO MOSOS, OSCAR MAURICIO LOSADA TOVAR",
     "1819-6608", "10.1016/j.fluid.2010.06.015"),
     new Article("IDENTIFICATION OF DC MOTOR WITH PARAMETRIC METHODS AND ARTIFICIAL NEURAL NETWORKS",
     "AGUSTIN SOTO OTALORA, JUNIOR FRANCISCO QUIJANO MOSOS, OSCAR MAURICIO LOSADA TOVAR",
     "1819-6608", "10.1016/j.fluid.2010.06.015"),
  
  ];

  }


export class Article{

  private name: string;
  private id:string;
  private doi:string;
  private authors:string

  constructor(name:string,authors:string,id:string,doi:string){
    this.name = name
    this.id = id
    this.doi = doi
    this.authors = authors
  }

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }

  getDoi(): string {
    return this.doi;
  }

  getAuthors(): string{
    return this.authors
  }
}
