import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faculties } from 'src/app/faculties';
import { menus } from 'src/app/topbarMenus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus = menus;
  faculty;
  inversion;


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = faculties[+(params.get('facultyId')) - 1];
      this.inversion = menus[+(params.get('menuId')) - 1];
      console.log(this.faculty);
      console.log(this.inversion);
    });
  }
}
