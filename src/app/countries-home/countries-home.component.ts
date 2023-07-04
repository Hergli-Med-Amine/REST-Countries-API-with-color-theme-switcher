import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';



@Component({
  selector: 'app-countries-home',
  templateUrl: './countries-home.component.html',
  styleUrls: ['./countries-home.component.css']
})
export class CountriesHomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, 
    public themeService: ThemeService) {}
  
  
  searchInput: string = "";
  filteredCountries!: Country[];  
  countries!: Country[];
  selectedRegion: string = '';
  regions: string[] = ['Oceania', 'Europe', 'Africa', 'Americas', 'Polar', 'Asia', 'Antarctic Ocean'];

  async ngOnInit() {
    try {
      const data = await this.http.get<any>('../assets/data/countries.json').toPromise();
      this.countries = data.map((country: any) => ({
        flag: country.flags.svg,
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        code: country.alpha3Code,
      }));
      this.filteredCountries = [...this.countries];
      
    } catch (error) {
      console.error('Error loading countries data:', error);
    }
  }

    Countriesbyregion(): void {
    if (this.selectedRegion) {
      this.filteredCountries = this.countries.filter(country => country.region === this.selectedRegion);
      
    } else {
      this.filteredCountries = this.countries;
    }
  }

  goToCountryDetails(country: Country): void {
    this.router.navigate(['/country', country.code]);
  }
  
  onSearch(): void {
    if (this.searchInput.trim() === '') {
      this.filteredCountries = [...this.countries];
    } else {
      this.filteredCountries = this.countries.filter(country =>
        country.name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    }
  }
  
}
