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

  datos: any = [];

  headElements = ['Año', 'Tipo', 'Total'];
  headL = [];

  ngOnInit(): void {
    switch (this.type) {
      case 1:
        this.headL.push('Año', 'Capital Semilla', 'Contrapartida', 'Sin financiacion', 'Total Proyectos');
        let years = this.groupBy(this.data, 'anio');
        console.log(years);
        break;
      case 2:
        this.headL.push('Año', 'Aporte Especie UPTC', 'Aporte Efectivo UPTC', 'Aporte Externo', 'Total Proyectos');
        for (let element of this.data) {
          this.datos.push({id: element.anio,
          first: element.AporteEspecie,
          second: element.AporteEfectivo,
          third: element.AporteExterno,
          fourth: element.totalDinero});
        }
        break;
      case 3:
        this.headL.push('Año', 'Centro de investigación y desarrollo tecnológico', 'Colciencias',
                        'Empresas', 'Entidades del gobierno central', 'Entidades del gobierno regional',
                        'Instituciones de educacion superior', 'Total');

        let year2014 = [{id: '2014'}];
        let year2015 = [{id: '2015'}];
        let year2016 = [{id: '2016'}];
        let year2017 = [{id: '2017'}];
        let year2018 = [{id: '2018'}];

        for (let element of this.data) {
          /*
          this.datos.push({id: element.anio,
          first: element.totalEntidadExterna,
          second: element.totalEntidadExterna,
          third: element.totalEntidadExterna,
          fourth: element.totalEntidadExterna,
          five: element.totalEntidadExterna,
          six: element.totalEntidadExterna,
          seven: element.totalEntidadExterna}
          );
          */
        }
        this.datos.push(year2014, year2015, year2016, year2017, year2018);
          break;
    }
  }
  groupBy = (list: any [], element: any) => {
    let tempList = [];
    return this.data.reduce((list: any[], actual: any) => {
     const key = actual[element];
     if (!list[key]) {
         list[key] = [];
     }
     tempList.push(actual);
     return tempList;
   });
 }
}
