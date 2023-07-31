import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { InvestigatorCvComponent } from './pages/investigator-cv/investigator-cv.component';
import { ArticleTableComponent } from './components/article-table/article-table.component';
import { ArticleMetricsComponent } from './pages/article-metrics/article-metrics.component';
import { MetricsTableComponent } from './components/metrics-table/metrics-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './pages/stats/stats.component';
import { CountriesChartComponent } from './components/reports/countries-chart/countries-chart.component';
import { InternationalIdChartComponent } from './components/reports/international-id-chart/international-id-chart.component';
import { RadarArticleChartComponent } from './components/reports/radar-article-chart/radar-article-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart'; // Importa el módulo ChartModule de primeng
import { AboutComponent } from './pages/about/about.component';
import { PuntuationTableComponent } from './components/puntuation-table/puntuation-table.component';
import { ArticlePuntuationChartComponent } from './components/reports/article-puntuation-chart/article-puntuation-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    InvestigatorCvComponent,
    ArticleTableComponent,
    ArticleMetricsComponent,
    MetricsTableComponent,
    StatsComponent,
    CountriesChartComponent,
    InternationalIdChartComponent,
    RadarArticleChartComponent,
    AboutComponent,
    PuntuationTableComponent,
    ArticlePuntuationChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  header_titles = ["Inicio", "Conocer Sistema", "Graficos"]
}
