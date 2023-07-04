import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries-app';

  constructor(public themeService: ThemeService) {}
  theme: string = "Dark Mode";
  

  changeTheme() {
    this.themeService.isDarkTheme = !this.themeService.isDarkTheme
    this.theme = this.themeService.isDarkTheme ? "Dark Mode" : "Light Mode";
  }
  
}
