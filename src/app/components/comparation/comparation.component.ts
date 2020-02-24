import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menus } from 'src/app/topbarMenus';
import { faculties } from 'src/app/faculties';

import { GraphicsScreenComponent } from 'src/app/components/graphics-screen/graphics-screen.component';

@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.component.html',
  styleUrls: ['./comparation.component.css'],
  entryComponents: [
    GraphicsScreenComponent
  ]
})
export class ComparationComponent implements OnInit {
  @ViewChild('facultyOneContainer', { static: true, read: ViewContainerRef })
  facultyOneEntry: ViewContainerRef;
  @ViewChild('facultyTwoContainer', { static: true, read: ViewContainerRef })
  facultyTwoEntry: ViewContainerRef;

  facultyOneId;
  facultyTwoId;
  tabId;
  menus = menus;

  constructor(
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.facultyOneId = params.get('faculty_id_one');
      this.facultyTwoId = params.get('faculty_id_two');
      this.tabId = params.get('tabId');
      this.loadGraphicsScreen();
    });
  }

  loadGraphicsScreen() {
    this.facultyOneEntry.clear();
    this.facultyTwoEntry.clear();

    const facOneFactory = this.resolver.resolveComponentFactory(GraphicsScreenComponent);
    const facTwoFactory = this.resolver.resolveComponentFactory(GraphicsScreenComponent);

    const factOneView = this.facultyOneEntry.createComponent(facOneFactory);
    const factTwoView = this.facultyTwoEntry.createComponent(facTwoFactory);

    factOneView.instance.loadComplete = false;
    factOneView.instance.faculty = this.facultyOneId;
    factOneView.instance.tab = this.tabId;

    factTwoView.instance.loadComplete = false;
    factTwoView.instance.faculty = this.facultyTwoId;
    factTwoView.instance.tab = this.tabId;
  }

}
