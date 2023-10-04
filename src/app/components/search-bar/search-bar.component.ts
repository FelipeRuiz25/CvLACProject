import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import {ButtonModule} from "primeng/button";
import { CvInvestigators } from 'src/app/data_managment/cv-investigators';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';
import { FormsModule } from '@angular/forms';
import {HttpParams} from "@angular/common/http";


const URL_NAME_SEARCH = "authors/name/"
const URL_ID_SEARCH = "authors/id"

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  list_authors!:CvInvestigators[]
  searchTerm$ = new Subject<string>();
  list_filtered !:CvInvestigators[];
  event!: KeyboardEvent;
  name_searched:string   = ""
  private url_get_authors = "authors/name/";
  isClicked = false;


  constructor(private dataManagerService:DataManagerService) {
  }


  search() {
    let params = new HttpParams()
      .append('limit', 10);
    this.dataManagerService
      .getAuthorsBy(this.url_get_authors + this.name_searched.toLowerCase(), params)
      .subscribe(result => {
        this.list_authors = result.authors;
        console.log(result)
        this.isClicked = true;
      }
    );
  }


  redirectToCv(id_investigator:string): void {
    console.log(id_investigator)
    const url = window.location.href.replace("/home", "/cvview/") + id_investigator;
    window.location.href = url;
  }



  format_text(text: string): string {
    const formattedText = text.toUpperCase().toLowerCase().replace(/\n/g, '');
    return formattedText;
  }

  ngOnInit(): void {
  }



}
