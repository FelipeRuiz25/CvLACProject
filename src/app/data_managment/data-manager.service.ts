import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CvInvestigators } from "./cv-investigators";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private cv_investigator_list!: CvInvestigators[] 
  private url_get_authors = "https://cvlacapi.onrender.com/authors/name/"; // URL to web api

  constructor(private http: HttpClient) {}

  public getAuthorsByName(url:string): Observable<CvInvestigators[]> {
    return this.http.get<CvInvestigators[]>(url);
  }
}
