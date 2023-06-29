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

      this.Nombre = Nombre;
      this.index = index;
      this.anio = anio;
      this.doi = DOI;
      this.palabras_claves = palabras_claves;
      this.ISSN = ISSN;
      this.volumen = volumen;
      this.autores = autores;
      this.tipo_articulo = tipo_articulo;
      this.nombre_revista = editorial_revista;
      this.marca_verificacion = marca_verificacion;
      this.paginacion = paginacion;
    }




  }
  