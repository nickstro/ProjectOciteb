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

import { OcitebService } from "src/app/ociteb.service";
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
  request;

  ip = "192.168.43.140";
  I01_I03 = "http://" + this.ip + ":3001/investment/getData";
  I04 = "http://" + this.ip + ":3001/investment4/getData";
  I05 = "http://" + this.ip + ":3001/investment5/getData";
  I06 = "http://" + this.ip + ":3001/investment6/getData";
  F01 = "http://" + this.ip + ":3001/formation1/getData";
  F02 = "http://" + this.ip + ":3001/formation2/getData";
  F03 = "http://" + this.ip + ":3001/formation3/getData";
  CO1 = "http://" + this.ip + ":3001/capacity1/getData";
  CO2 = "http://" + this.ip + ":3001/capacity2/getData";
  CO2_1 = "http://" + this.ip + ":3001/capacity2.1/getData";
  PB03 = "http://" + this.ip + ":3001/pb3/getData";

  public showHBar = false;
  public showStacked = false;
  public showTable = false;
  public showPie = false;
  public showLine = false;
  public showMixed = false;

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
    private services: OcitebService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = faculties[+params.get("facultyId") - 1];
      this.menu = menus[+params.get("menuId") - 1];
      this.cancelRequest();
      this.sendPostRequest();
    });
  }

  cancelRequest() {
    if (this.request != null) {
      this.request.unsubscribe();
    }
  }

  sendPostRequest() {
    const json = {
      facultyId: this.faculty.id + "",
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
    const tableFactory = this.resolver.resolveComponentFactory(TableComponent);
    const pieFactory = this.resolver.resolveComponentFactory(PieComponent);
    const lineFactory = this.resolver.resolveComponentFactory(LineComponent);
    const mixedFactory = this.resolver.resolveComponentFactory(MixedComponent);

    this.request = this.services
      .sendPostRequest(this.getRequestUrl(), json)
      .subscribe((data: any[]) => {
        console.log(data);

        const constHbar = this.hbarEntry.createComponent(hbarFactory);
        const lineConst = this.lineEntry.createComponent(lineFactory);
        const pieConst = this.pieEntry.createComponent(pieFactory);
        const stackedConst = this.stackedEntry.createComponent(
          stackedFactory
        );
        const tableConst = this.tableEntry.createComponent(tableFactory);
        const mixedConst = this.mixedEntry.createComponent(mixedFactory);

        switch (this.menu.id) {
          case 1:
            this.showHBar = false;
            this.showStacked = true;
            this.showTable = true;
            this.showPie = false;
            this.showLine = true;
            this.showMixed = false;
            stackedConst.instance.data = data;
            lineConst.instance.data = data;
            tableConst.instance.data = data;
            tableConst.instance.type = 1;
            break;
          case 2:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = false;
            this.showLine = true;
            this.showMixed = false;
            lineConst.instance.data = data;
            tableConst.instance.data = data;
            tableConst.instance.type = 1;
            break;
          case 3:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = false;
            this.showLine = true;
            this.showMixed = false;
            lineConst.instance.data = data;
            tableConst.instance.data = data;
            tableConst.instance.type = 1;
            break;
          case 4:
            this.showHBar = false;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = false;
            this.showLine = false;
            this.showMixed = false;
            mixedConst.instance.data = data;
            tableConst.instance.data = data;
            tableConst.instance.type = 2;
            break;
          case 5:
            this.showHBar = true;
            this.showStacked = false;
            this.showTable = true;
            this.showPie = true;
            this.showLine = false;
            this.showMixed = false;
            constHbar.instance.data = data;
            tableConst.instance.data = data;
            //se puede hacer dos graficas de dona
            //Grafica Año vs Aaporte
            pieConst.instance.data = data;
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
            lineConst.instance.data = data;
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
            lineConst.instance.data = data;
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
            lineConst.instance.data = data;
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
            lineConst.instance.data = data;
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
            lineConst.instance.data = data;
            break;
        }
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
      behavior: "smooth"
    });
  }

  getRequestUrl() {
    let menu = "";
    switch (this.menu.id) {
      case 1:
        menu = this.I01_I03;
        break;
      case 2:
        menu = this.I01_I03;
        break;
      case 3:
        menu = this.I01_I03;
        break;
      case 4:
        menu = this.I04;
        break;
      case 5:
        menu = this.I05;
        break;
      case 6:
        menu = this.I06;
        break;
      case 7:
        menu = this.F01;
        break;
      case 8:
        menu = this.F02;
        break;
      case 9:
        menu = this.F03;
        break;
      case 10:
        menu = this.CO1;
        break;
      case 11:
        menu = this.CO2;
        break;
      case 12:
        menu = this.CO2_1;
        break;
      case 13:
        menu = this.PB03;
        break;
    }
    return menu;
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
