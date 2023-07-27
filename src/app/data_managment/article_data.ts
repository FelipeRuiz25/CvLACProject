export class Articulo_Data {

    "Nombre":string;
    "index":number
    "anio": string;
    "doi": string;
    "palabras_claves": string;
    "ISSN": string;
    "volumen": string;
    "autores": string;
    "tipo_articulo": string;
    "nombre_revista": boolean;
    "marca_verificacion": boolean;
    "paginacion": boolean;
    metadata_false = 0;
    metadata_true = 0;
    
  
    constructor(
      Nombre:string,
      index:number,
      anio: string,
      DOI: string,
      palabras_claves: string,
      ISSN: string,
      volumen: string,
      autores: string,
      tipo_articulo: string,
      editorial_revista: boolean,
      marca_verificacion: boolean,
      paginacion: boolean,
    ) {
      this.Nombre = this.verify_atribute(Nombre);
      this.index = this.verify_atribute(index);
      this.anio = this.verify_atribute(anio);
      this.doi = this.verify_atribute(DOI);
      this.palabras_claves = this.verify_atribute(palabras_claves);
      this.ISSN = this.verify_atribute(ISSN);
      this.volumen = this.verify_atribute(volumen);
      this.autores = this.verify_atribute(autores);
      this.tipo_articulo = this.verify_atribute(tipo_articulo);
      this.nombre_revista = this.verify_atribute(editorial_revista);
      this.marca_verificacion = this.verify_atribute(marca_verificacion);
      this.paginacion = this.verify_atribute(paginacion);
    }

      // Getter para metadata_false
   get_metadata_false(): number {
    return this.metadata_false;
  }

  // Getter para metadata_true
  get_metadata_true(): number {
    return this.metadata_true;
  }


    verify_atribute(input_key:any){
      if (!input_key || input_key === '') {
        this.metadata_false += 1;
      } else {
        this.metadata_true += 1;
      }
      return input_key
    }


  }
  