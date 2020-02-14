import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faculties } from 'src/app/faculties';
import { schools } from 'src/app/schools';
import { investigationGroups } from 'src/app/investigationGroups';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  menuId;
  cardList;
  menuTitle;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('menuId');
      this.loadCardMenu(parseInt(this.menuId, 10));
    });
  }

  loadCardMenu(menuId) {
    switch (menuId) {
      case 1:
        // Facultades
        console.log('Menu ' + menuId);
        this.menuTitle = 'Facultades';
        this.cardList = faculties;
        console.log(this.cardList);
        break;
      case 2:
        // Grupos de investigacion
        console.log('Menu ' + menuId);
        this.menuTitle = 'Grupos de investigacion';
        this.cardList = investigationGroups;
        console.log(this.cardList);
        break;
      case 3:
        // Escuelas
        console.log('Menu ' + menuId);
        this.menuTitle = 'Escuelas';
        this.cardList = schools;
        console.log(this.cardList);
        break;
    }
  }
}
