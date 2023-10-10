import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InvestigatorCvComponent } from './pages/investigator-cv/investigator-cv.component';
import { ArticleMetricsComponent } from './pages/article-metrics/article-metrics.component';
import { StatsComponent } from './pages/stats/stats.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'cvview/:id', component : InvestigatorCvComponent},
  { path : 'article_metrics/:id/:article_index', component : ArticleMetricsComponent},
  { path : 'stats', component : StatsComponent} ,
  { path : 'about', component : AboutComponent} ,
  { path : '**', redirectTo : 'home' , pathMatch : 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

