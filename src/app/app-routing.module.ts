import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InvestigatorCvComponent } from './pages/investigator-cv/investigator-cv.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'cvview', component : InvestigatorCvComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}

