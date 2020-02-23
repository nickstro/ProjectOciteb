import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faculties } from 'src/app/faculties';
import { schools } from 'src/app/schools';
import { investigationGroups } from 'src/app/investigationGroups';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  menuId;
  cardList;
  menuTitle;
  searchText: string;
  dataSource;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('menuId');
      this.loadCardMenu(parseInt(this.menuId, 10));
      this.dataSource = new MatTableDataSource(this.cardList);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadCardMenu(menuId) {
    switch (menuId) {
      case 1:
        // Facultades
        this.menuTitle = 'Facultades';
        this.cardList = faculties;
        break;
      case 2:
        // Grupos de investigacion
        this.menuTitle = 'Grupos de investigacion';
        this.cardList = investigationGroups;
        break;
      case 3:
        // Escuelas
        this.menuTitle = 'Escuelas';
        this.cardList = schools;
        break;
    }
  }
}
