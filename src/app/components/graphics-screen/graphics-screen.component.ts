import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faculties } from 'src/app/faculties';
import { menus } from 'src/app/topbarMenus';

@Component({
  selector: 'app-graphics-screen',
  templateUrl: './graphics-screen.component.html',
  styleUrls: ['./graphics-screen.component.css']
})
export class GraphicsScreenComponent implements OnInit {

  menus = menus;
  faculty;
  menu;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(this.menus);
      this.faculty = faculties[+params.get('menuId')];
      this.menu = menus[+params.get('tabId')];
    });
  }
}
