import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import {AuthorsSearchResult, CvInvestigators} from "./cv-investigators";
import { Investigator_Cv } from "./investigator_cv";
import { Articulo_Data } from "./article_data";
import { Country_Report } from "./country_report";
import {environment} from "../../environments/environment";

const apiUrl = environment.localApiUrl

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) {}

  public getAuthorsBy(search_ep:string, params: HttpParams = new HttpParams()): Observable<AuthorsSearchResult> {
    return this.http.get<AuthorsSearchResult>(apiUrl+search_ep, {params});
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

  public getMetadataReportData(url:string): Observable<Object> {
    return this.http.get<Object>(url);
  }



}
