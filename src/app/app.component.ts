import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data_managment/data-manager.service';
import { CvInvestigators } from './data_managment/cv-investigators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  
  
  title = 'cvlac_project';
  header_titles = ["Inicio", "Conocer Sistema", "Graficos"]
  list_authors!:CvInvestigators[]

  constructor(private dataManagerService:DataManagerService){
  }


  

  ngOnInit(): void {

  }



  
}
