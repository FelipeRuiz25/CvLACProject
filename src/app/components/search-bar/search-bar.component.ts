import {Component, OnInit} from '@angular/core';
import {CvInvestigators} from 'src/app/data_managment/cv-investigators';
import {DataManagerService} from 'src/app/data_managment/data-manager.service';
import {HttpParams} from "@angular/common/http";

const PAGES_PER_REQUEST = 10;
const CVLAC_URL = "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=";
const URL_NAME_SEARCH = "authors/name/";
const URL_ID_SEARCH = "authors/id/";

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
  slice_list!: CvInvestigators[]
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
  limit: number; //Items per page
  total_records: number = 0; //Total search records
  //Server pagination
  server_page: number = 0;
  server_limit: number = 0;

  constructor(private dataManagerService:DataManagerService) {
    this.limit = this.options[0].value
    this.server_limit = this.limit * PAGES_PER_REQUEST
    this.onSearch()
  }


  onSearch() {
    this.first = 0
    this.page = 0
    this.server_page = 0
    this.search()
  }

  onPageChange(event: PageEvent) {
    this.page = event.page;
    this.limit = event.rows;
    this.first = event.first;
    if (this.server_page !== this.calc_server_page()){
      this.server_page = this.calc_server_page()
      this.search()
    } else {
      this.slice_list = this.get_slice()
    }
  }

  onLimitChange(){
    this.server_limit = this.calc_server_limit()
    this.page = 0
    this.server_page = 0
    this.first = 0
    this.search()
  }

  search(){
    if (this.name_searched == ""){
      this.isClicked = false
      return
    }
    let params = new HttpParams()
      .append('limit', this.server_limit)
      .append('page', this.server_page);
    let url = this.get_search_url(this.name_searched)
    console.log(url)
    this.dataManagerService
      .getAuthorsBy(url, params)
      .subscribe(result => {
          this.list_authors = result.authors;
          this.slice_list = this.get_slice()
          this.total_records = result.total_number
          console.log(result)
          this.isClicked = true;
        }
      );
  }

  /**
   * Defines whether perform an id or name search
   * @param name search name
   * @private
   */
  private get_search_url(name: string): string{
    name = name.toLowerCase().trim()
    const regex = /^\d+$/;
    if (regex.test(name)){
      return URL_ID_SEARCH + name
    }
    return URL_NAME_SEARCH + name
  }

  get_slice(): CvInvestigators[]{
    let slice_first = this.first - (this.server_page * this.server_limit)
    console.log(`first ${this.first}-${this.first + this.limit} of ${this.list_authors.length}`)
    console.log(`slice first ${slice_first}-${slice_first + this.limit} of ${this.list_authors.length}`)
    return this.list_authors.slice(slice_first, slice_first + this.limit)
  }

  redirectToCv(id_investigator:string): void {
    console.log(id_investigator)
    window.location.href = window.location.href.replace("/home", "/cvview/") + id_investigator;
  }

  format_text(text: string): string {
    return text.toLowerCase().replace(/\n/g, '');
  }

  private calc_server_page(){
    return Math.floor(this.page / PAGES_PER_REQUEST)
  }

  private calc_server_limit(){
    return this.limit * PAGES_PER_REQUEST
  }

  open_cvlac_curriculum(id_cv: string){
    window.open(CVLAC_URL+id_cv, '_blank');
  }

  ngOnInit(): void {
  }
}
