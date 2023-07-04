import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/countrie-api.service';
import { CountryDetails } from '../models/country-details';
import { Observable, Subscription, throwError, firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {
  country: CountryDetails | undefined;
  responseData: any;
  subscription!: Subscription;
  borders: string[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    public themeService: ThemeService
  ) {
    const countryCode = this.route.snapshot.paramMap.get('name');
    if (countryCode) {
      this.fetchCountryDetails(countryCode);
    } 
  }

  async fetchCountryDetails(str: string): Promise<void> {
    try {
      const response = await firstValueFrom(this.getdata(str));
      const countryData = response[0];
      const currencyKey = Object.keys(countryData.currencies);
      const languagesKey = Object.keys(countryData.languages);
      this.country = {
        nativename: countryData.name.official,
        population: countryData.population,
        capital: countryData.capital,
        region: countryData.region,
        subregion: countryData.subregion,
        languages: [],
        domain: countryData.tld[0],
        border: countryData.borders,
        flag: countryData.flags.svg,
        currencies: countryData.currencies[currencyKey[0]].name,
        name: countryData.name.common
      };
      this.borders = [];
      for (let langkey in languagesKey) {
        this.country.languages.push(" "+countryData.languages[languagesKey[langkey]]);
      }
      if(this.country.border !== undefined) {
        for (let i=0; i<this.country.border.length;i++) {
          const response = await firstValueFrom(this.getname(this.country.border[i]));
          
          const countryName = response.name.common;
          
          if (this.borders !== undefined) {
            this.borders.push(countryName);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }


  getdata(str: string): Observable<any> {
    
    if (str) {
      return this.apiService.getData(str).pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError(() => new Error('Country name is not available.'));
        })
      );
    } else {
      return throwError(() => new Error('Country name is not available.'));
    }
  }

  getname(name: string): Observable<any> {
    if (name) {
      return this.apiService.getName(name).pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError(() => new Error('Country name is not available.'));
        })
      );
    } else {
      return throwError(() => new Error('Country name is not available.'));
    }
  }

  

  goToCountriesHome(): void {
    this.router.navigate(['/']);
  }

}