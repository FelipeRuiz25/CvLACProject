import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { CvInvestigators } from 'src/app/data_managment/cv-investigators';
import { DataManagerService } from 'src/app/data_managment/data-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isLoaded: boolean = false;
  list_authors!:CvInvestigators[]
  


  getStateLoaded(data: any) {
    this.isLoaded = data; // Actualizar la propiedad del componente padre con el valor recibido
  }


 app_search_bar = SearchBarComponent

 constructor(private dataManagerService:DataManagerService) {
 }


  ngOnInit(): void {
    /*this.dataManagerService.getAuthorsByName().subscribe(list_authors => {
      this.list_authors = list_authors;
      console.log(list_authors)
      this.isLoaded = true;
    });*/
  }

}
