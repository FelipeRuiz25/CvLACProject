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
    const hamburgerMenu = document.querySelector('.hamburger_menu') as HTMLElement;
    const container2 = document.querySelector('.container2') as HTMLElement;
    
    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', () => {
        if(container2){
        container2.style.display = (container2.style.display === 'none' || container2.style.display === '') ? 'flex' : 'none';
    }});
    }
  }
}

