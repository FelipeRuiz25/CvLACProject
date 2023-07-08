import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  @Input() header_titles?: string[];

  home_path = "home"
  stats_path = "stats"
  about_path = "about"




  ngOnInit(): void {

    // Aquí puedes agregar lógica adicional si es necesario
  }
}

