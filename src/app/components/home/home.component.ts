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

  public showHBar = true;
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
      menuId: this.getMenuId()
    };

    console.log(json);

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

    switch (this.menu.id) {
        case 1:
            this.showHBar = false;
            this.showStacked = true;
            this.showTable = true;
            this.showPie = false;
            this.showLine = true;
            this.showMixed = false;
            this.stackedEntry.createComponent(stackedFactory);
            this.tableEntry.createComponent(tableFactory);
            this.lineEntry.createComponent(lineFactory);
            const lineConst = this.lineEntry.createComponent(lineFactory);
            lineConst.instance.data = 'info';
          break;
        case 2:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = false;
            this.showLine = true;
            this.showMixed = false;
            this.tableEntry.createComponent(tableFactory);
            this.lineEntry.createComponent(lineFactory);
          break;
        case 3:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = false;
            this.showLine = true;
            this.showMixed = false;
            this.tableEntry.createComponent(tableFactory);
            this.lineEntry.createComponent(lineFactory);
          break;
        case 4:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = false;
            this.showLine = false;
            this.showMixed = true;
            this.mixedEntry.createComponent(mixedFactory);
            this.tableEntry.createComponent(tableFactory);
          break;
        case 5:
            this.showHBar = true;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = true;
            this.showLine = false;
            this.showMixed = false;
            this.hbarEntry.createComponent(hbarFactory);
            this.tableEntry.createComponent(tableFactory);
            //se puede hacer dos graficas de dona
            //Grafica Año vs Aaporte
            this.pieEntry.createComponent(pieFactory);
          break;
        case 6:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = true;
            this.showLine = true;
            this.showMixed = false;
            this.lineEntry.createComponent(lineFactory);
            this.tableEntry.createComponent(tableFactory);
            //año vs aporte
            this.pieEntry.createComponent(pieFactory);
          break;
        case 7:
            this.showHBar = true;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = true;
            this.showLine = true;
            this.showMixed = false;
            this.lineEntry.createComponent(lineFactory);
            this.tableEntry.createComponent(tableFactory);
            this.hbarEntry.createComponent(hbarFactory);
            //año vs numero jovenes investigadores
            this.pieEntry.createComponent(pieFactory);
          break;
        case 8:
            this.showHBar = true;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = true;
            this.showLine = true;
            this.showMixed = false;
            this.lineEntry.createComponent(lineFactory);
            this.tableEntry.createComponent(tableFactory);
            this.hbarEntry.createComponent(hbarFactory);
            //año vs numero jovenes investigadores
            this.pieEntry.createComponent(pieFactory);
          break;
        case 9:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = true;
            this.showLine = true;
            this.showMixed = false;
          //F03. Semilleros de investigación
            this.lineEntry.createComponent(lineFactory);
            this.tableEntry.createComponent(tableFactory);
            //año vs numero jovenes investigadores
            this.pieEntry.createComponent(pieFactory);
          break;
        case 10:
            this.showHBar = true;
            this.showStacked = false;
            this.showTable = false;
            this.showPie = false;
            this.showLine = false;
            this.showMixed = false;
          //C01. Grupos de investigación categorizados por Colciencias
            this.hbarEntry.createComponent(hbarFactory);
          break;
        case 11:
            this.showHBar = true;
            this.showStacked = false;
            this.showTable = false;
            this.showPie = false;
            this.showLine = false;
            this.showMixed = false;
          //C02. Investigadores reconocidos
            this.hbarEntry.createComponent(hbarFactory);
          break;
        case 12:
            this.showHBar = true;
            this.showStacked = false;
            this.showTable = false;
            this.showPie = false;
            this.showLine = false;
            this.showMixed = false;
          //C02.1. Investigadores docentes según nivel de estudios y tipo de vinculación
           this.hbarEntry.createComponent(hbarFactory);
          break;
        case 13:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = true;
            this.showLine = true;
            this.showMixed = false;
          //PB03. Número de libros sello editorial Uptc
            this.tableEntry.createComponent(tableFactory);
            this.pieEntry.createComponent(pieFactory);
            this.lineEntry.createComponent(lineFactory);
          break;
      }

    this.pokeApi.sendPostRequest(json).subscribe((data: any[]) => {
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

  getMenuId() {
    let menu = "";
    switch (this.menu.id) {
      case 1:
        menu = "I01";
        break;
      case 2:
        menu = "I02";
        break;
      case 3:
        menu = "I03";
        break;
      case 4:
        menu = "I04";
        break;
      case 5:
        menu = "I05";
        break;
      case 6:
        menu = "I06";
        break;
      case 7:
        menu = "F01";
        break;
      case 8:
        menu = "F02";
        break;
      case 9:
        menu = "F03";
        break;
      case 10:
        menu = "C01";
        break;
      case 11:
        menu = "C02";
        break;
      case 12:
        menu = "C02.1";
        break;
      case 13:
        menu = "PB03";
        break;
    }
    return menu;
  }
}
