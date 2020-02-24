import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'OcitebProject';
  isMenuOpen = false;
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
