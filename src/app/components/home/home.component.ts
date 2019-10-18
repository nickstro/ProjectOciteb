import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NumberprojectsComponent } from 'src/app/components/Investment/numberprojects/numberprojects.component';
import { LevelofprojectsComponent } from './../Investment/levelofprojects/levelofprojects.component';

import { PokeapiService } from 'src/app/pokeapi.service';
import { faculties } from 'src/app/faculties';
import { menus } from 'src/app/topbarMenus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [NumberprojectsComponent, LevelofprojectsComponent]
})
export class HomeComponent implements OnInit {

  name;
  menus = menus;
  faculty;
  menu;

  @ViewChild('container', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private pokeApi: PokeapiService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = faculties[+(params.get('facultyId')) - 1];
      this.menu = menus[+(params.get('menuId')) - 1];
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

    switch (this.menu.id) {
      case 1:
          this.entry.clear();
          const factory = this.resolver.resolveComponentFactory(NumberprojectsComponent);
          const componentRef = this.entry.createComponent(factory);
          //componentRef.instance.name carga los datos en el componente seleccionado
          componentRef.instance.name = this.name;
          break;

      case 2:
          this.entry.clear();
          const factory2 = this.resolver.resolveComponentFactory(LevelofprojectsComponent);
          const componentRef2 = this.entry.createComponent(factory2);
          componentRef2.instance.name = "HOLAAAAAAAAAAAA";
          break;
    }
    this.pokeApi.sendPostRequest(request).subscribe((data: any[]) => {
      console.log(data);
    });
  }
}
