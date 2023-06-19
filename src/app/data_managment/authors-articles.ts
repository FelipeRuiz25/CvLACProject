export class Article_Author{
    autores!:string;
    nombre_articulo!:string;
    doi!:string;

    constructor(autores: string, nombre_articulo: string, doi: string) {
        this.autores = autores;
        this.nombre_articulo = nombre_articulo;
        this.doi = doi;
      }
}
