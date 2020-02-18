import { menu } from 'src/app/menu';
import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faculties } from 'src/app/faculties';
import { menus } from 'src/app/topbarMenus';

import { HbarComponent } from 'src/app/components/graphics/hbar/hbar.component';
import { StackedComponent } from 'src/app/components/graphics/stacked/stacked.component';
import { TableComponent } from 'src/app/components/graphics/table/table.component';
import { PieComponent } from 'src/app/components/graphics/pie/pie.component';
import { LineComponent } from 'src/app/components/graphics/line/line.component';
import { MixedComponent } from 'src/app/components/graphics/mixed/mixed.component';

@Component({
  selector: 'app-graphics-screen',
  templateUrl: './graphics-screen.component.html',
  styleUrls: ['./graphics-screen.component.css'],
  entryComponents: [
    HbarComponent,
    StackedComponent,
    TableComponent,
    PieComponent,
    LineComponent,
    MixedComponent
  ]
})
export class GraphicsScreenComponent implements OnInit {

  menus = menus;
  faculty;
  menu;
  request;

  @ViewChild('hbarcontainer', { static: true, read: ViewContainerRef })
  hbarEntry: ViewContainerRef;
  @ViewChild('stackedcontainer', { static: true, read: ViewContainerRef })
  stackedEntry: ViewContainerRef;
  @ViewChild('tablecontainer', { static: true, read: ViewContainerRef })
  tableEntry: ViewContainerRef;
  @ViewChild('piecontainer', { static: true, read: ViewContainerRef })
  pieEntry: ViewContainerRef;
  @ViewChild('linecontainer', { static: true, read: ViewContainerRef })
  lineEntry: ViewContainerRef;
  @ViewChild('mixedcontainer', { static: true, read: ViewContainerRef })
  mixedEntry: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(this.menus);
      this.faculty = faculties[+params.get('menuId')];
      this.menu = menus[+params.get('tabId')];
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
      menuId: this.menu
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

    const constHbar = this.hbarEntry.createComponent(hbarFactory);
    const lineConst = this.lineEntry.createComponent(lineFactory);
    const pieConst = this.pieEntry.createComponent(pieFactory);
    const stackedConst = this.stackedEntry.createComponent(stackedFactory);
    const tableConst = this.tableEntry.createComponent(tableFactory);
    const mixedConst = this.mixedEntry.createComponent(mixedFactory);
  }
}
