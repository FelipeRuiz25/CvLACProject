import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CvInvestigators } from "./cv-investigators";
import { Article_Author } from "./authors-articles";
import { Investigator_Cv } from "./investigator_cv";
import { Articulo_Data } from "./article_data";
import { Country_Report } from "./country_report";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private cv_investigator_list!: CvInvestigators[] 
  private url_get_authors = "https://cvlacapi.onrender.com/authors/name/"; // URL buscar autores
  private url_get_authors_articles = "https://cvlacapi.onrender.com//articles/"; // URL buscar autores
  private url_get_article_data = "https://cvlacapi.onrender.com//articles/0001344275/......."  

  constructor(private http: HttpClient) {}

  public getAuthorsByName(url:string): Observable<CvInvestigators[]> {
    return this.http.get<CvInvestigators[]>(url);
  }


  public getArticlesByAuthor(url:string): Observable<Investigator_Cv> {
    return this.http.get<Investigator_Cv>(url);
  }

  public getArticlesData(url:string): Observable<Articulo_Data> {
    return this.http.get<Articulo_Data>(url);
  }

  public getCountriesReportData(url:string): Observable<Country_Report> {
    return this.http.get<Country_Report>(url);
  }



}
