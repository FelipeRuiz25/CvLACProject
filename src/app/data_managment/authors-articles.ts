export class Article_Author{
    autores!:string;
    nombre_articulo!:string;
    doi!:string;
    index!:number
    constructor(autores: string, nombre_articulo: string, doi: string, index:number) {
        this.index = index
        this.autores = autores;
        this.nombre_articulo = nombre_articulo;
        this.doi = doi;
      }
}
