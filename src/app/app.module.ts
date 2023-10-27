import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {HeaderComponent} from './components/header/header.component';
import {InvestigatorCvComponent} from './pages/investigator-cv/investigator-cv.component';
import {ArticleTableComponent} from './components/article-table/article-table.component';
import {ArticleMetricsComponent} from './pages/article-metrics/article-metrics.component';
import {MetricsTableComponent} from './components/metrics-table/metrics-table.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StatsComponent} from './pages/stats/stats.component';
import {CountriesChartComponent} from './components/reports/countries-chart/countries-chart.component';
import {
  InternationalIdChartComponent
} from './components/reports/international-id-chart/international-id-chart.component';
import {RadarArticleChartComponent} from './components/reports/radar-article-chart/radar-article-chart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ChartModule} from 'primeng/chart'; // Importa el módulo ChartModule de primeng
import {AboutComponent} from './pages/about/about.component';
import {PuntuationTableComponent} from './components/puntuation-table/puntuation-table.component';
import {
  ArticlePuntuationChartComponent
} from './components/reports/article-puntuation-chart/article-puntuation-chart.component';
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {PaginatorModule} from "primeng/paginator";
import {NgOptimizedImage} from "@angular/common";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {DataViewModule} from "primeng/dataview";
import {FieldsetModule} from "primeng/fieldset";
import {TooltipModule} from 'primeng/tooltip';
import {InputSwitchModule} from "primeng/inputswitch";
import {ChipModule} from "primeng/chip";
import {NgCircleProgressModule} from "ng-circle-progress";

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
    ChartModule,
    ButtonModule,
    DropdownModule,
    PaginatorModule,
    NgOptimizedImage,
    CardModule,
    DividerModule,
    DataViewModule,
    FieldsetModule,
    TooltipModule,
    InputSwitchModule,
    ChipModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#232659",
      "outerStrokeGradientStopColor": "#4882c2",
      "innerStrokeColor": "#d7d3d3",
      "innerStrokeWidth": 10,
      "title": "UI",
      "showSubtitle": false,
      "animateTitle": true,
      "animationDuration": 1000,
      "showUnits": false,
      "clockwise": false,
      "startFromZero": true,
      "lazy": true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  header_titles = ["Inicio", "Conocer Sistema", "Graficos"]
}
