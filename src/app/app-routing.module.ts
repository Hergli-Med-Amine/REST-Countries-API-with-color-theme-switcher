import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesHomeComponent } from './countries-home/countries-home.component'; 
import { CountryDetailsComponent } from './country-details/country-details.component'; 


const routes: Routes = [
  { path: '', component: CountriesHomeComponent },
  { path: 'country/:name', component: CountryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
