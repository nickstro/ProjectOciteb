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
import { PieComponent } from "src/app/components/graphics/pie/pie.component";
import { LineComponent } from "src/app/components/graphics/line/line.component";
import { MixedComponent } from "src/app/components/graphics/mixed/mixed.component";

import { PokeapiService } from "src/app/pokeapi.service";
import { faculties } from "src/app/faculties";
import { menus } from "src/app/topbarMenus";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  entryComponents: [
    HbarComponent,
    StackedComponent,
    TableComponent,
    PieComponent,
    LineComponent,
    MixedComponent
  ]
})
export class HomeComponent implements OnInit {
  name;
  menus = menus;
  faculty;
  menu;
  apiResponse;

  public showHBar: true;
  public showStacked = true;
  public showTable = true;
  public showPie = true;
  public showLine = true;
  public showMixed = true;

  @ViewChild("hbarcontainer", { static: true, read: ViewContainerRef })
  hbarEntry: ViewContainerRef;
  @ViewChild("stackedcontainer", { static: true, read: ViewContainerRef })
  stackedEntry: ViewContainerRef;
  @ViewChild("tablecontainer", { static: true, read: ViewContainerRef })
  tableEntry: ViewContainerRef;
  @ViewChild("piecontainer", { static: true, read: ViewContainerRef })
  pieEntry: ViewContainerRef;
  @ViewChild("linecontainer", { static: true, read: ViewContainerRef })
  lineEntry: ViewContainerRef;
  @ViewChild("mixedcontainer", { static: true, read: ViewContainerRef })
  mixedEntry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private pokeApi: PokeapiService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = faculties[+params.get("facultyId") - 1];
      this.menu = menus[+params.get("menuId") - 1];
      this.sendPostRequest();
    });
  }

  sendPostRequest() {
    const json = {
      facultyId: this.faculty.id,
      menuId: Conversor.getMenuId(this.menu.id)
    };

    this.pokeApi.sendPostRequest(json).subscribe((data: any[]) => {

      this.hbarEntry.clear();
      this.stackedEntry.clear();
      this.tableEntry.clear();
      this.pieEntry.clear();
      this.lineEntry.clear();
      this.mixedEntry.clear();

      const hbarFactory = this.resolver.resolveComponentFactory(HbarComponent);
      const stackedFactory = this.resolver.resolveComponentFactory(
        StackedComponent
      );
      const tableFactory = this.resolver.resolveComponentFactory(
        TableComponent
      );
      const pieFactory = this.resolver.resolveComponentFactory(PieComponent);
      const lineFactory = this.resolver.resolveComponentFactory(LineComponent);
      const mixedFactory = this.resolver.resolveComponentFactory(
        MixedComponent
      );

      this.hbarEntry.createComponent(hbarFactory);
      this.stackedEntry.createComponent(stackedFactory);
      this.tableEntry.createComponent(tableFactory);
      this.pieEntry.createComponent(pieFactory);
      this.lineEntry.createComponent(lineFactory);
      this.mixedEntry.createComponent(mixedFactory);

      switch (this.menu.id) {
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;
        case 8:
          break;
        case 9:
          break;
        case 10:
          break;
        case 11:
          break;
        case 12:
          break;
        case 13:
          break;
      }
      console.log(data);
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  gotoTop() {
    // TODO Arreglar el scroll hasta arriba
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
