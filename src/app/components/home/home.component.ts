import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HbarComponent } from "src/app/components/graphics/hbar/hbar.component";
import { StackedComponent } from "src/app/components/graphics/stacked/stacked.component";
import { TableComponent } from "src/app/components/graphics/table/table.component";

import { PokeapiService } from "src/app/pokeapi.service";
import { faculties } from "src/app/faculties";
import { menus } from "src/app/topbarMenus";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  entryComponents: [HbarComponent, StackedComponent, TableComponent]
})
export class HomeComponent implements OnInit {
  name;
  menus = menus;
  faculty;
  menu;

  public showHBar: true;
  public showStacked = true;
  public showTable = true;

  @ViewChild("hbarcontainer", { static: true, read: ViewContainerRef })
  hbarEntry: ViewContainerRef;
  @ViewChild("stackedcontainer", { static: true, read: ViewContainerRef })
  stackedEntry: ViewContainerRef;
  @ViewChild("tablecontainer", { static: true, read: ViewContainerRef })
  tableEntry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private pokeApi: PokeapiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = faculties[+params.get("facultyId") - 1];
      this.menu = menus[+params.get("menuId") - 1];
      // this.sendGetRequest();
      this.sendPostRequest();
    });
  }

  sendPostRequest() {
    const request = {};
    request["facultyId"] = this.faculty.id;
    request["menuId"] = this.menu.id;

    switch (this.menu.id) {
      case 1:
        this.hbarEntry.clear();
        this.stackedEntry.clear();
        this.tableEntry.clear();
        const hbarFactory = this.resolver.resolveComponentFactory(
          HbarComponent
        );
        const stackedFactory = this.resolver.resolveComponentFactory(
          StackedComponent
        );
        const tableFactory = this.resolver.resolveComponentFactory(
          TableComponent
        );
        this.hbarEntry.createComponent(hbarFactory);
        this.stackedEntry.createComponent(stackedFactory);
        this.tableEntry.createComponent(tableFactory);

        // Ejemplo con NumberprojectsComponent
        // componentRef.instance permite acceder a las variables del componente
        // que se este llamando en factory

        // testVar de numberprojects.component.ts es la variable que se esta igualando
        // componentRef.instance.testVar = 'Cualquier valor aqui';
        break;
    }
    this.pokeApi.sendPostRequest(request).subscribe((data: any[]) => {
      console.log(data);
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
