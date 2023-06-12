import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { InvestigatorCvComponent } from './pages/investigator-cv/investigator-cv.component';
import { ArticleTableComponent } from './components/article-table/article-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    InvestigatorCvComponent,
    ArticleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  header_titles = ["Inicio", "Conocer Sistema", "Graficos"]

}
