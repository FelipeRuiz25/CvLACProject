import { Article_Author } from "./authors-articles"

export class Investigator_Cv{
    Nombre!:string
    number_articles!:number
    Categoria!:string
    Articulos!:Article_Author[]

    constructor(Nombre: string, category: string, Articulos: Article_Author[]) {
        this.Nombre = Nombre;
        this.Articulos = Articulos;
        this.Categoria = category;
        this.number_articles = Articulos.length;
      }


}