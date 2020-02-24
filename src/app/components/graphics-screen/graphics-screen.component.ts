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
import { faculties } from 'src/app/faculties';
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
  faculties = faculties;
  faculty;
  facultyName;
  tab;
  tabName;
  query;
  loadComplete = true;
  loadSplit = false;
  showNoData = false;
  showLoading = true;
  showHBar = false;
  showStacked = false;
  showTable = false;
  showPie = false;
  showLine = false;
  showMixed = false;



  constructor(
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    if (this.loadComplete) {
      this.loadSplit = false;
      this.route.paramMap.subscribe(params => {
          this.faculty = params.get('faculty_id');
          for (const iterator of faculties) {
            if (iterator.id == this.faculty) {
              this.facultyName = iterator.name;
            }
          }
          this.tab = params.get('tabId');
          for (const iterator of menus) {
            if (iterator.id === this.tab) {
              this.tabName = iterator.name;
            }
          }
          this.sendPostRequest();
        });
    } else if (this.loadSplit){
      this.loadComplete = false;
      for (const iterator of faculties) {
          if (iterator.id == this.faculty) {
            this.facultyName = iterator.name;
          }
        }

      for (const iterator of menus) {
          if (iterator.id === this.tab) {
            this.tabName = iterator.name;
          }
        }
      console.log('F')
      this.sendPostRequest();
      }

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
  }

  sendGraphQlRequest(facQuery, variables) {
    this.hideGraphics();
    this.showLoading = true;
    let data;
    this.apollo
        .watchQuery({
          query: facQuery
          ,
          variables
        })
        .valueChanges.subscribe((result) => {
          let iterableData;
          for (const value of Object.keys(result.data)) {
            iterableData = result.data[value];
          }
          console.log(iterableData);
          if (iterableData.length > 0) {
            this.showNoData = false;
            this.showGraphics(iterableData);
          } else {
            this.showLoading = false;
            this.showNoData = true;
          }
        });
  }

  showGraphics(data) {
    this.stackedEntry.clear();
    this.hbarEntry.clear();
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

    let constHbar;
    let lineConst;
    //let pieConst = this.pieEntry.createComponent(pieFactory);
    let stackedConst = this.pieEntry.createComponent(stackedFactory);
    let tableConst;
    //let mixedConst = this.mixedEntry.createComponent(mixedFactory);

    switch (this.tab) {
      case 'I01':
        this.hideGraphics();
        this.showTable = true;
        this.showHBar = true;
        constHbar = this.hbarEntry.createComponent(hbarFactory);
        tableConst = this.tableEntry.createComponent(tableFactory);

        tableConst.instance.data = data;
        tableConst.instance.type = 1;

        constHbar.instance.data = data;
        constHbar.instance.type = 1;
        break;
      case 'I02':
        this.hideGraphics();
        this.showLine = true;
        this.showTable = true;
        lineConst = this.lineEntry.createComponent(lineFactory);
        tableConst = this.tableEntry.createComponent(tableFactory);

        tableConst.instance.data = data;
        tableConst.instance.type = 2;

        lineConst.instance.data = data;
        lineConst.instance.type = 1;
        break;
      case 'I03':
        this.hideGraphics();
        this.showTable = true;
        this.showLine = true;
        tableConst = this.tableEntry.createComponent(tableFactory);
        lineConst = this.lineEntry.createComponent(lineFactory);

        lineConst.instance.data = data;
        lineConst.instance.type = 2;

        tableConst.instance.data = data;
        tableConst.instance.type = 3;
        break;
      case 'I04':
        this.hideGraphics();
        this.showHBar = true;
        this.showTable = true;
        constHbar = this.hbarEntry.createComponent(hbarFactory);
        tableConst = this.tableEntry.createComponent(tableFactory);

        tableConst.instance.data = data;
        tableConst.instance.type = 4;

        constHbar.instance.data = data;
        constHbar.instance.type = 4;
        break;
      case 'I05':
        this.hideGraphics();
        this.showHBar = true;
        this.showTable = true;
        constHbar = this.hbarEntry.createComponent(hbarFactory);
        tableConst = this.tableEntry.createComponent(tableFactory);

        tableConst.instance.data = data;
        tableConst.instance.type = 5;

        constHbar.instance.data = data;
        constHbar.instance.type = 5;
        break;
      case 'I06':
        this.hideGraphics();
        this.showTable = true;
        this.showLine = true;
        tableConst = this.tableEntry.createComponent(tableFactory);
        lineConst = this.lineEntry.createComponent(lineFactory);

        lineConst.instance.data = data;
        lineConst.instance.type = 6;

        tableConst.instance.data = data;
        tableConst.instance.type = 5;
        break;
      case 'F01':
        this.hideGraphics();
        this.showTable = true;
        this.showHBar = true;
        this.showLine = true;
        tableConst = this.tableEntry.createComponent(tableFactory);
        constHbar = this.hbarEntry.createComponent(hbarFactory);
        lineConst = this.lineEntry.createComponent(lineFactory);

        lineConst.instance.data = data;
        lineConst.instance.type = 6;

        tableConst.instance.data = data;
        tableConst.instance.type = 6;

        constHbar.instance.data = data;
        constHbar.instance.type = 6;
        break;
      case 'F02':
        this.hideGraphics();
        this.showTable = true;
        this.showHBar = true;
        this.showLine = true;
        tableConst = this.tableEntry.createComponent(tableFactory);
        constHbar = this.hbarEntry.createComponent(hbarFactory);
        lineConst = this.lineEntry.createComponent(lineFactory);

        lineConst.instance.data = data;
        lineConst.instance.type = 6;

        tableConst.instance.data = data;
        tableConst.instance.type = 6;

        constHbar.instance.data = data;
        constHbar.instance.type = 6;
        break;
      case 'F03':
        this.hideGraphics();
        this.showTable = true;
        this.showHBar = true;
        this.showLine = true;
        tableConst = this.tableEntry.createComponent(tableFactory);
        constHbar = this.hbarEntry.createComponent(hbarFactory);
        lineConst = this.lineEntry.createComponent(lineFactory);

        lineConst.instance.data = data;
        lineConst.instance.type = 7;

        tableConst.instance.data = data;
        tableConst.instance.type = 7;

        constHbar.instance.data = data;
        constHbar.instance.type = 7;
        break;
      case 'C01':
        this.hideGraphics();
        this.showTable = true;
        this.showHBar = true;
        tableConst = this.tableEntry.createComponent(tableFactory);
        constHbar = this.hbarEntry.createComponent(hbarFactory);

        tableConst.instance.data = data;
        tableConst.instance.type = 8;

        constHbar.instance.data = data;
        constHbar.instance.type = 8;
        break;
      case 'C02':
        this.hideGraphics();
        this.showHBar = true;
        constHbar = this.hbarEntry.createComponent(hbarFactory);

        constHbar.instance.data = data;
        constHbar.instance.type = 9;
        break;
      case 'C02_1':
        this.hideGraphics();
        this.showHBar = true;
        constHbar = this.hbarEntry.createComponent(hbarFactory);

        constHbar.instance.data = data;
        constHbar.instance.type = 9;
        break;
      case 'BP3':
        this.hideGraphics();
        this.showTable = true;
        this.showHBar = true;
        tableConst = this.tableEntry.createComponent(tableFactory);
        constHbar = this.hbarEntry.createComponent(hbarFactory);

        constHbar.instance.data = data;
        constHbar.instance.type = 10;

        tableConst.instance.data = data;
        tableConst.instance.type = 10;
        break;
    }
    this.showLoading = false;
  }

  hideGraphics() {
    this.showHBar = false;
    this.showStacked = false;
    this.showTable = false;
    this.showPie = false;
    this.showLine = false;
    this.showMixed = false;
  }
}
