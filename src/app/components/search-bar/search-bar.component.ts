import {Component, OnInit} from '@angular/core';
import {CvInvestigators} from 'src/app/data_managment/cv-investigators';
import {DataManagerService} from 'src/app/data_managment/data-manager.service';
import {HttpParams} from "@angular/common/http";


const URL_NAME_SEARCH = "authors/name/"
const URL_ID_SEARCH = "authors/id"

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  list_authors!:CvInvestigators[]
  name_searched:string   = ""
  isClicked = false;

  /**
   * number of items per page options
   */
  options = [
    { label: 10, value: 10 },
    { label: 25, value: 25 },
    { label: 50, value: 50 },
    { label: 100, value: 100 }
  ];
  page: number = 0; //Current page
  first: number = 0; //First element of the current page
  limit: number = this.options[0].value; //Items per page
  total_records: number = 0; //Total search records

  constructor(private dataManagerService:DataManagerService) {
  }


  onSearch() {
    this.first = 0
    this.page = 0
    this.search()
  }

  onPageChange(event: PageEvent) {
    this.page = event.page;
    this.limit = event.rows;
    this.first = event.first;
    this.search()
  }

  onLimitChange(){
    this.page = 0
    this.first = 0
    this.search()
  }

  search(){
    let params = new HttpParams()
      .append('limit', this.limit)
      .append('page', this.page);
    this.dataManagerService
      .getAuthorsBy(URL_NAME_SEARCH + this.name_searched.toLowerCase(), params)
      .subscribe(result => {
          this.list_authors = result.authors;
          this.total_records = result.total_number
          console.log(result)
          this.isClicked = true;
        }
      );
  }

  redirectToCv(id_investigator:string): void {
    console.log(id_investigator)
    window.location.href = window.location.href.replace("/home", "/cvview/") + id_investigator;
  }



  format_text(text: string): string {
    return text.toUpperCase().toLowerCase().replace(/\n/g, '');
  }

  ngOnInit(): void {
  }
}
