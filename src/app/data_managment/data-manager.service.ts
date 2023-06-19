import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CvInvestigators } from "./cv-investigators";
import { Article_Author } from "./authors-articles";
import { Investigator_Cv } from "./investigator_cv";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private cv_investigator_list!: CvInvestigators[] 
  private url_get_authors = "https://cvlacapi.onrender.com/authors/name/"; // URL buscar autores
  private url_get_authors_articles = "https://cvlacapi.onrender.com//articles/"; // URL buscar autores


  constructor(private http: HttpClient) {}

  public getAuthorsByName(url:string): Observable<CvInvestigators[]> {
    return this.http.get<CvInvestigators[]>(url);
  }


  public getArticlesByAuthor(url:string): Observable<Investigator_Cv> {
    return this.http.get<Investigator_Cv>(url);
  }
}
