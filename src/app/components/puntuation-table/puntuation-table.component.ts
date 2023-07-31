import { Component, Input, OnInit, Output } from '@angular/core';
import { Articulo_Data } from 'src/app/data_managment/article_data';

@Component({
  selector: 'app-puntuation-table',
  templateUrl: './puntuation-table.component.html',
  styleUrls: ['./puntuation-table.component.css']
})
export class PuntuationTableComponent implements OnInit {

  
  @Input() article_data!:Articulo_Data
  @Input() percent_metadata!:number


  names_list_item_quality!:any
  items_uncompleted:string[] = []
  total_points = 0
  @Output() isLoaded = false 

  constructor() { }

  ngOnInit(): void {
    if(this.article_data != undefined){   
      this.names_list_item_quality = {
        "Title" : this.isContented(this.article_data['Nombre'],"título"),
        "Autor or Creator" : this.isContented(this.article_data['autores'],"Autor or Creator"),
        "Subject and Keywords": this.isContented(this.article_data['palabras_claves'],"Subject and Keywords"),
        "Publisher" : this.isContented(this.article_data['nombre_revista'], "Publisher"),
        "Other Contribution" : 0,
        "Date": this.isContented(this.article_data['anio'],"Date"),
        "Resource Type": this.isContented(this.article_data['tipo_articulo'], "Resource Type"),
        "Format": this.isContented("","Format"),
        "Resource Identifier" : this.get_doi_puntuation(this.article_data["doi"],this.article_data["valid_doi"],this.article_data["duplicated_doi"]),
        "Source" : this.verify_source(this.article_data.verify_source_puntuation()),
        "Language": this.isContented("","Language"),
        "Verification mark": this.isContented(this.article_data['marca_verificacion'], "Verification Mark")
      }
      if (this.names_list_item_quality['Resource Identifier'] != 3) {
        this.items_uncompleted.push('Resource Identifier')
      }
      if (this.names_list_item_quality['Source'] != 2) {
        console.log("Source es de: " + this.names_list_item_quality['Source']);
        
        this.items_uncompleted.push('Source')
      }
      this.isLoaded = true
    }
  }



  /**
   * Evalua la puntuacion de doi
   * Retorna 1 si lo contiene
   * 3 si es valido
   * 5 si es valido y no esta duplicado
   * @param doi 
   * @param valid_doi 
   * @param duplicated_doi 
   */
  get_doi_puntuation(doi:string, valid_doi:any, duplicated_doi:any){
    let points_doi = 0;
    if(this.isContented(doi,"DOI") ){
      points_doi = 1
    }else if(valid_doi != null){
      points_doi = 3
    }else if(duplicated_doi != null && valid_doi != null){
      points_doi = 5
    }
    return points_doi
  }

  /**
   * 
   * @param value Se utilizara
   * @returns 
   */
  isContented(value: any,keyname:string): boolean {
    if (value === null || value === undefined || value === '') {
      this.items_uncompleted.push(" "+ keyname)
      return false;
    }else{
      this.total_points += 1
      return true
    }
   
  }


  verify_source(value:number){
    this.total_points += value
    return value
  }
  



  

}
