import { element } from 'protractor';
import { Component } from '@angular/core';
import { WavesModule, TableModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data;
  type;

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  datos: any = [];

  headElements = ['Año', 'Tipo', 'Total'];
  headL = [];

  ngOnInit(): void {

    if(this.type == 1){
      this.headL.push('Año', 'Tipo', 'Total');
    }else if(this.type == 2){
      this.headL.push('Grupo', 'Numero de elementos', 'Valor');
    }

    for (var element of this.data) {
      this.datos.push({'id': element.Anio,
        'first': element.Tipo,
        'last': element.Total});
    }
  }
}
