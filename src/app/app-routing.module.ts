import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InvestigatorCvComponent } from './pages/investigator-cv/investigator-cv.component';
import { ArticleMetricsComponent } from './pages/article-metrics/article-metrics.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'cvview', component : InvestigatorCvComponent},
  { path : 'article_metrics', component : ArticleMetricsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}

