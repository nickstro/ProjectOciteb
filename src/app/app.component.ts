import { Component } from '@angular/core';

import { menu } from 'src/app/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'OcitebProject';
  isMenuOpen = false;
  menus = menu;
  contentMargin = 240;

  onFloatClick() {
    console.log('Click');
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  onToolbarMenuClose() {
    this.isMenuOpen = false;
    this.contentMargin = 70;
  }
}
