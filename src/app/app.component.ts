import { Component } from '@angular/core';

import { faculties } from 'src/app/faculties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'OcitebProject';
  faculties = faculties;
}
