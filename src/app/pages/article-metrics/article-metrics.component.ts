import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo_Data } from 'src/app/data_managment/article_data';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';

@Component({
  selector: 'app-article-metrics',
  templateUrl: './article-metrics.component.html',
  styleUrls: ['./article-metrics.component.scss']
})
export class ArticleMetricsComponent implements OnInit {

  private url_get_authors_articles = "https://cvlacapi.onrender.com//articles/"; // URL buscar autores
  private investigator_id = this.route.snapshot.params['id']
  private article_index = this.route.snapshot.params['article_index']
  
  article_data!:any
  article_name!:string
  isLoaded = false

  percent_metadata!:number
  data!:any

  constructor(private dataManagerService:DataManagerService,private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.dataManagerService.getArticlesData(this.url_get_authors_articles + this.investigator_id + "/" + this.article_index)
      .subscribe(article => {
        this.data = article;
        console.log(article)
        this.set_article_info()
        this.article_name = this.article_data['nombre_articulo']
        this.isLoaded = true
        this.get_percent_completed()
    });
    if(this.isLoaded){
      this.get_percent_completed()
    }

  }

  /**
   * Obtiene el objeto de la API y los convierte en un objeto Article_Data para facilitar leer sus propiedades
   */
  set_article_info(){
    this.article_data = new Articulo_Data(
      this.data['nombre_articulo'],
      this.data['index'],
      this.data['anio'],
      this.data['doi'],
      this.data['palabras_claves'],
      this.data['issn_revista'],
      this.data['volumen'],
      this.data['autores'],
      this.data['tipo_articulo'],
      this.data['nombre_revista'],
      this.data['marca_verificacion'],
      this.verify_pagination(this.data['pagina_fin'],this.data['pagina_inicio']),
      this.data["pais"],
      this.data["fasciculo"],
      this.data["valid_doi"],
      this.data["duplicated"],
      this.data['editorial_revista']
      )
  }

  /**
   * Verifica que haya una pagina de incio y de fina, depnde de esto retirna true si registra ambas o false de lo contrario
   * @param pagina_inicio
   * @param pagina_final
   * @returns
   */
  verify_pagination(pagina_inicio: string, pagina_final: string): boolean {
    if (pagina_inicio === undefined || pagina_final === undefined) {
      return false
    }
    return true;
  }

  /** Obtiene el total de metadatos registrados en el sistema como porcentage*/
  get_percent_completed():void{
    console.log("Datos true: " + this.article_data.get_metadata_true() +"\n Datos False: " + this.article_data.get_metadata_false())
    this.percent_metadata = this.article_data.get_metadata_true() / (this.article_data.get_metadata_true() + this.article_data.get_metadata_false()) * 100 //Se le resta uno del indice que le pusimos para indentificar
    this.percent_metadata = Math.trunc(this.percent_metadata)
  }
}
