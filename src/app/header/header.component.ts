import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  darkTheme = true;

  constructor(private readonly renderer: Renderer2) {}

  setTheme(): void {
    this.darkTheme = !this.darkTheme;
    const currentThemeClass = `${!this.darkTheme ? 'light' : 'dark'}-theme`;
    const newThemeClass = `${this.darkTheme ? 'light' : 'dark'}-theme`;
    this.renderer.removeClass(document.body, currentThemeClass);
    this.renderer.addClass(document.body, newThemeClass);
  }
}
