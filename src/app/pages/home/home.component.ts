import { Component, Input, OnInit } from '@angular/core';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { CvInvestigators } from 'src/app/data_managment/cv-investigators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isLoaded: boolean = false;
  list_authors!:CvInvestigators[]
  
  @Input() header_titles?: string[];

  home_path = "home"
  stats_path = "stats"
  about_path = "about"

  getStateLoaded(data: any) {
    this.isLoaded = data; // Actualizar la propiedad del componente padre con el valor recibido
  }


 app_search_bar = SearchBarComponent

 constructor() {
 }

 redirectTo(route:string): void {
  const url = "/" + route
  window.location.href = url;
}

  ngOnInit(): void {

  }

}
