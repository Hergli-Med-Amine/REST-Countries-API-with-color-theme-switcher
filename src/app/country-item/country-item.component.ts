import { Component, Input } from '@angular/core';
import { Country } from '../models/country';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent {
  constructor(public themeService: ThemeService) {}
  @Input() country!: Country;


}
