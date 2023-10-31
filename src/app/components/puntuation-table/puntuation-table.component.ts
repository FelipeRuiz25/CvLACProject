import {Component, Input, OnInit, Output} from '@angular/core';
import {Articulo_Data} from 'src/app/data_managment/article_data';
import {TableModel} from "./table-model";
import {ArticleRating} from "../../data_managment/article-rating";

const TABLE_MODEL: TableModel[] = [
  new TableModel("Titulo", 8, "pi-pencil", "title", "verified"),
  new TableModel("Autores", 8, "pi-users", "author","verified"),
  new TableModel("Año de publicación", 8, "pi-calendar", "date","verified"),
  new TableModel("Idioma", 4, "pi-language", "language", "basic"),
  new TableModel("Tipo de recurso", 4, "pi-book", "resource_type", "basic"),
  new TableModel("Editorial", 8, "pi-file-edit", "publisher", "verified"),
  new TableModel("Otro colaborador", 4, "pi-user-plus", "other_contributor", "basic"),
  new TableModel("Formato", 4, "pi-code", "format", "basic"),
  new TableModel("Alcance", 4, "pi-globe", "coverage", "basic"),
  new TableModel("Identificador DOI", 20, "pi-at", "resource_identifier", "doi"),
  new TableModel("Fuente", 24, "pi-bookmark", "source", "source"),
  new TableModel("Palabras clave", 4, "pi-align-center", "subject_and_keywords", "basic"),
  new TableModel("Descripción", 4, "pi-comment", "description", "basic"),
  new TableModel("Total", 100, "pi-bookmark", "total", "total"),
]


@Component({
  selector: 'app-puntuation-table',
  templateUrl: './puntuation-table.component.html',
  styleUrls: ['./puntuation-table.component.css']
})
export class PuntuationTableComponent implements OnInit {

  @Input() article_data!: Articulo_Data
  @Input() article_rating!: ArticleRating

  names_list_item_quality!: any
  items_uncompleted: string[] = []
  total_points = 0
  @Output() isLoaded = false

  constructor() {}

  ngOnInit(): void {
    console.log("PUNCTUATION:")
    console.log(this.article_rating)
    if (this.article_data != undefined) {
      this.names_list_item_quality = {
        "Title": this.isContented(this.article_data['Nombre'], "título"),
        "Autor or Creator": this.isContented(this.article_data['autores'], "Autor or Creator"),
        "Subject and Keywords": this.isContented(this.article_data['palabras_claves'], "Subject and Keywords"),
        "Publisher": this.isContented(this.article_data['nombre_revista'], "Publisher"),
        "Other Contribution": 0,
        "Date": this.isContented(this.article_data['anio'], "Date"),
        "Resource Type": this.isContented(this.article_data['tipo_articulo'], "Resource Type"),
        "Format": this.isContented("", "Format"),
        "Resource Identifier": this.get_doi_punctuation(this.article_data["doi"], this.article_data["valid_doi"], this.article_data["duplicated_doi"]),
        "Source": this.verify_source(this.article_data.verify_source_puntuation()),
        "Language": this.isContented("", "Language"),
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
  get_doi_punctuation(doi: string, valid_doi: any, duplicated_doi: any) {
    let points_doi = 0;
    if (this.isContented(doi, "DOI")) {
      points_doi = 1
    } else if (valid_doi != null) {
      points_doi = 3
    } else if (duplicated_doi != null && valid_doi != null) {
      points_doi = 5
    }
    return points_doi
  }

  /**
   *
   * @param value Se utilizara
   * @returns
   */
  isContented(value: any, keyname: string): boolean {
    if (value === null || value === undefined || value === '') {
      this.items_uncompleted.push(" " + keyname)
      return false;
    } else {
      this.total_points += 1
      return true
    }

  }


  verify_source(value: number) {
    this.total_points += value
    return value
  }


  protected readonly toString = toString;
  protected readonly TABLE_MODEL = TABLE_MODEL;

  get_punctuation(fieldName: string):number {
    if(this.article_rating[fieldName])
      return this.article_rating[fieldName]
    return 0
  }
}
