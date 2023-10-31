import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {



  stats: Stats[];

  selectedStat!: Stats;

  constructor() {
      this.stats = [
        {name: 'Analísis por identificadores'},
        {name: 'Analísis por países'},
        {name: 'Analísis por metadatos'},
      ];
  }

}
interface Stats {
  name: string,
}

