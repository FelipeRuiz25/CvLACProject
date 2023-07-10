import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { CvInvestigators } from 'src/app/data_managment/cv-investigators';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';
import { FormsModule } from '@angular/forms';


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
  private url_get_authors = "https://cvlacapi.onrender.com/authors/name/"; 
  isClicked = false;


  constructor(private dataManagerService:DataManagerService) {
  }


  search() {
    this.dataManagerService.getAuthorsByName(this.url_get_authors + this.name_searched.toLowerCase()).subscribe(list_authors => {
      this.list_authors = list_authors;
      console.log(list_authors)
      this.isClicked = true;
    });
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
