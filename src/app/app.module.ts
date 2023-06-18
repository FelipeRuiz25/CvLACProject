import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { InvestigatorCvComponent } from './pages/investigator-cv/investigator-cv.component';
import { ArticleTableComponent } from './components/article-table/article-table.component';
import { ArticleMetricsComponent } from './pages/article-metrics/article-metrics.component';
import { MetricsTableComponent } from './components/metrics-table/metrics-table.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    InvestigatorCvComponent,
    ArticleTableComponent,
    ArticleMetricsComponent,
    MetricsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  header_titles = ["Inicio", "Conocer Sistema", "Graficos"]





}
