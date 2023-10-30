export class Articulo_Data {

  "Nombre": string;
  "index": number
  "anio": string;
  "doi": string;
  "palabras_claves": string;
  "ISSN": string;
  "volumen": string;
  "autores": string;
  "tipo_articulo": string;
  "nombre_revista": boolean;
  "marca_verificacion": boolean;
  pagina_inicio: string;
  pagina_fin: string;
  "pais": string;
  "fasciculo": string;
  "valid_doi": any;
  "duplicated_doi": any;
  editorial_revista: string;
  metadata_false = 0;
  metadata_true = 0;

  constructor(
    Nombre: string,
    index: number,
    anio: string,
    DOI: string,
    palabras_claves: string,
    ISSN: string,
    volumen: string,
    autores: string,
    tipo_articulo: string,
    nombre_revista: boolean,
    marca_verificacion: boolean,
    pagina_inicio: string,
    pagina_fin: string,
    pais: string,
    fasciculo: string,
    valid_doi: any,
    duplicated_doi: any,
    editorial_revista: string
  ) {
    this.Nombre = this.verify_atribute(Nombre, "Nombre");
    this.index = index;
    this.anio = this.verify_atribute(anio, "Fecha");
    this.doi = this.verify_atribute(DOI, "DOI");
    this.palabras_claves = this.verify_atribute(palabras_claves, "Palabras Claves");
    this.ISSN = this.verify_atribute(ISSN, "ISSN");
    this.volumen = this.verify_atribute(volumen, "volumen");
    console.log(typeof (autores))
    this.autores = this.verify_atribute(autores, "Autores");
    this.tipo_articulo = this.verify_atribute(tipo_articulo, "Tipo articulo");
    this.nombre_revista = this.verify_atribute(nombre_revista, "Editorial revista");
    this.marca_verificacion = this.verify_atribute(marca_verificacion, "Marca verificacion");
    this.pagina_inicio = this.verify_atribute(pagina_inicio, "Pagina inicio");
    this.pagina_fin = this.verify_atribute(pagina_fin, "Pagina final");
    this.pais = this.verify_atribute(pais, "Pais");
    this.fasciculo = this.verify_atribute(fasciculo, "Fascículo");
    this.valid_doi = valid_doi
    this.duplicated_doi = duplicated_doi
    this.editorial_revista = editorial_revista
  }

  // Getter para metadata_false
  get_metadata_false(): number {
    return this.metadata_false;
  }

  // Getter para metadata_true
  get_metadata_true(): number {
    return this.metadata_true;
  }


  verify_atribute(input_key: any, aux: string) {
    if (!input_key || input_key === '') {
      this.metadata_false += 1;
    } else {
      this.metadata_true += 1;
    }
    return input_key
  }


  verify_atribute_source(input_key: any) {
    return !(!input_key || input_key === '');
  }

  /**
   * Obtiene el puntaje, retorna:
   *  0 si no registra informacion el articulo
   * 1 si maneja informacion pero datos faltantes sobre (Revista, ISSN, Volumen, pag inicio, pag fin)
   * 2 Cumple con todos los metadatos esperados mencionados.
   */
  verify_source_puntuation(): 2 /*Cumple con todos*/ | 0 /*No cumple*/ | 1/*Cumple con algunos*/ {
    if (this.verify_atribute_source(this.ISSN) || this.verify_atribute_source(this.nombre_revista)
      || this.verify_atribute_source(this.volumen)) {
      return 2;
    } else if (!this.verify_atribute_source(this.ISSN) && !this.verify_atribute_source(this.nombre_revista)
      && !this.verify_atribute_source(this.volumen)) {
      return 0;
    } else {
      return 1;
    }
  }


}
