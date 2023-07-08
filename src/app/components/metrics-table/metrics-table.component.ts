import { Component, Input, OnInit } from '@angular/core';
import { Articulo_Data } from 'src/app/data_managment/article_data';

@Component({
  selector: 'app-metrics-table',
  templateUrl: './metrics-table.component.html',
  styleUrls: ['./metrics-table.component.css']
})
export class MetricsTableComponent implements OnInit {
  

  @Input() article_data!:any
  data!: any

  metadata_true = 0
  metadata_false = 0
  isCompleted = false
  isLoaded = false


  constructor() { }

  ngOnInit(): void {
    let list = this.article_data['Articulos']
    let data = list[0]
    this.article_data = new Articulo_Data(
      data['nombre_articulo'],
      data['nombre_articulo'],
      data['index'],
      data['anio'],
      data['doi'],
      data['palabras_claves'],
      data['issn_revista'],
      data['volumen'],
      data['autores'],
      data['tipo_articulo'],
      data['editorial_revista'],
      data['marca_verificacion'],
      this.verify_pagination(data['marca_verificacion'],data['marca_verificacion']))   
      console.log(this.article_data)
  }

  verify_pagination(pagina_inicio: string, pagina_final: string): boolean {
    if (pagina_inicio === undefined || pagina_final === undefined) {
      if(!this.isLoaded){
        this.isCompleted  = true
      }
      return false;
    }
    if(!this.isLoaded){
      this.isCompleted  = true
    }
    return true;
  }

  isContented(value: any): boolean {
    if (Array.isArray(value)) {
      this.count_metadata(value.length === 0)
      return value.length === 0;
    }
    this.count_metadata(value === null || value === undefined || value === '')
    return value === null || value === undefined || value === ''
    }


  count_metadata(isContented:boolean){
      isContented?this.metadata_true+=1:this.metadata_false+=1
  }

  get_percent_completed(){
    if(this.isCompleted = true){
      console.log("Total de datos: " + (this.metadata_true + this.metadata_false))
      this.isLoaded = true
      return (this.metadata_true)/(this.metadata_true+this.metadata_false) * 100
    }else{
      return null
    }
  }


}
