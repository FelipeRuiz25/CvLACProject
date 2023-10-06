import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';
import { Investigator_Cv } from 'src/app/data_managment/investigator_cv';

@Component({
  selector: 'app-investigator-cv',
  templateUrl: './investigator-cv.component.html',
  styleUrls: ['./investigator-cv.component.css']
})
export class InvestigatorCvComponent implements OnInit {


  investigator!: Investigator_Cv //Contiene la informacion personal del investigador 
  url_get_authors_articles = "https://cvlacapi.onrender.com//articles/"; // URL buscar autores
  url_id_cv !: string //el URL con el id que se va a buscar en la api
  investigator_id!:string //El idnetificador para buscar el investigador qu
  isLoaded = false


  constructor(private dataManagerService:DataManagerService,private route: ActivatedRoute,private currentRouter: Router) {
    
  }

  ngOnInit(): void {
    this.search();
  }


  search() {
    this.investigator_id = this.route.snapshot.params['id']
    this.url_id_cv = this.currentRouter.url
    this.dataManagerService.getArticlesByAuthor(this.url_get_authors_articles + this.route.snapshot.params['id']).subscribe(investigator => {
      this.investigator = new Investigator_Cv(investigator.Nombre,investigator.Categoria, investigator.Articulos)
      this.isLoaded = true;
    });
  }


}
