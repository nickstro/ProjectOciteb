import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import { menus } from 'src/app/topbarMenus';
import { querys } from 'src/app/querys';

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
  hbarFactory = this.resolver.resolveComponentFactory(HbarComponent);
  stackedFactory = this.resolver.resolveComponentFactory(
      StackedComponent
    );
  tableFactory = this.resolver.resolveComponentFactory(TableComponent);
  pieFactory = this.resolver.resolveComponentFactory(PieComponent);
  lineFactory = this.resolver.resolveComponentFactory(LineComponent);
  mixedFactory = this.resolver.resolveComponentFactory(MixedComponent);

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

  menus = menus;
  faculty;
  tab;
  query;
  showHBar = true;
  showStacked = true;
  showTable = true;
  showPie = true;
  showLine = true;
  showMixed = true;



  constructor(
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.faculty = params.get('faculty_id');
      this.tab = params.get('tabId');
      this.sendPostRequest();
    });
  }

  sendPostRequest() {
    for (let index = 0; index < querys.length; index++) {
      const element = querys[index];
      if (element.id === this.tab) {
        this.query = querys[index].query;
      }
    }

    let variables;

    switch (this.tab) {
      case 'I01':
        variables = {
          faculty: this.faculty,
          table: this.tab
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'I02':
        variables = {
          faculty: this.faculty,
          table: this.tab
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'I03':
        variables = {
          faculty: this.faculty,
          table: this.tab
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'I04':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'I05':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'I06':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'F01':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'F02':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'F03':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'C01':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'C02':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'C02_1':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
      case 'BP3':
        variables = {
          faculty: this.faculty,
        };

        this.sendGraphQlRequest(this.query, variables);
        break;
    }

    /*
    const constHbar = this.hbarEntry.createComponent(hbarFactory);
    const lineConst = this.lineEntry.createComponent(lineFactory);
    const pieConst = this.pieEntry.createComponent(pieFactory);
    const stackedConst = this.stackedEntry.createComponent(stackedFactory);
    const tableConst = this.tableEntry.createComponent(tableFactory);
    const mixedConst = this.mixedEntry.createComponent(mixedFactory);
    */
  }

  sendGraphQlRequest(facQuery, variables) {
    let data;
    this.apollo
        .watchQuery({
          query: facQuery
          ,
          variables
        })
        .valueChanges.subscribe((result: any) => {
          let iterableData;
          for (const value of Object.keys(result.data)) {
            iterableData = result.data[value];
          }
          this.showGraphics(iterableData);
        });
  }

  showGraphics(data) {
    this.hbarEntry.clear();
    this.stackedEntry.clear();
    this.tableEntry.clear();
    this.pieEntry.clear();
    this.lineEntry.clear();
    this.mixedEntry.clear();

    const tableConst = this.tableEntry.createComponent(this.tableFactory);
    const constHbar = this.hbarEntry.createComponent(this.hbarFactory);
    const lineConst = this.lineEntry.createComponent(this.lineFactory);

    console.log(data);

    switch (this.tab) {
      case 'I01':
        tableConst.instance.data = data;
        tableConst.instance.type = 1;

        constHbar.instance.data = data;
        break;
      case 'I02':
        tableConst.instance.data = data;
        tableConst.instance.type = 2;

        lineConst.instance.data = data;
        lineConst.instance.type = 1;
        break;
      case 'I03':
        tableConst.instance.data = data;
        tableConst.instance.type = 3;

        lineConst.instance.data = data;
        lineConst.instance.type = 2;
        break;
      case 'I04':
        break;
      case 'I05':
        break;
      case 'I06':
        break;
      case 'F01':
        break;
      case 'F02':
        break;
      case 'F03':
        break;
      case 'C01':
        break;
      case 'C02':
        break;
      case 'C02_1':
        break;
      case 'BP3':
        break;
    }
  }
}
