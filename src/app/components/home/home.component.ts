import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokeapiService } from 'src/app/pokeapi.service';
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
  menu;


  constructor(
    private route: ActivatedRoute,
    private pokeApi: PokeapiService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = faculties[+(params.get('facultyId')) - 1];
      this.menu = menus[+(params.get('menuId')) - 1];
      console.log(this.faculty);
      console.log(this.menu);
      // this.sendGetRequest();
      this.sendPostRequest();
    });
  }

  sendGetRequest() {
    this.pokeApi.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
    });
  }

  sendPostRequest() {
    const request = {};
    request['facultyId'] = this.faculty.id;
    request['menuId'] = this.menu.id;
    console.log(request);
    this.pokeApi.sendPostRequest(request).subscribe((data: any[]) => {
      console.log(data);
    });
  }
}
