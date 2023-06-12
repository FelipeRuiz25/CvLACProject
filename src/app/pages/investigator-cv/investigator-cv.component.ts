import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigator-cv',
  templateUrl: './investigator-cv.component.html',
  styleUrls: ['./investigator-cv.component.css']
})
export class InvestigatorCvComponent implements OnInit {


  example_investigator = {
    full_name: "Juan Sebastian Gonzales",
    number_articles: 0,
    number_projects: 0,
    category: "Junior"
  };


  constructor() { }

  ngOnInit(): void {
  }

}
