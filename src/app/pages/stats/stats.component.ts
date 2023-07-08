import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {


total_articles = 10
id_most_used = "ORCID"
id_most_used_count = 153
top_metadata_used = ["ISSN","Author" , "Revista editorial"]
less_metadata_used = ["Volumen","Tipo Artículo" , "Marca de Validación"]

}
