import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faculties } from 'src/app/faculties';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faculty;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = faculties[+(params.get('facultyId')) - 1];
      console.log(this.faculty);
    });
  }
}
