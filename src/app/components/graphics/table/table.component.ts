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
        const years = this.groupBy(this.data, 'anio');
        Object.keys(years).forEach( (item) => {
          years[item].sort((a: any, b: any) => a.tipo < b.tipo ? -1 : 1);
        });
        Object.keys(years).forEach((item) => {
          this.datos.push({id: item, first: years[item][0].total,
            second: years[item][1].total, third: years[item][2].total,
            fourth: years[item][0].total + years[item][1].total + years[item][2].total});
        });
        const totals = [0, 0, 0];
        Object.keys(years).forEach((actual) => {
          totals.forEach((item, index) =>{
            totals[index] += years[actual][index].total;
          });
        });
        this.datos.push({id: 'Totales', first: totals[0],
          second: totals[1], third: totals[2],
          fourth: (totals[0] + totals[1] + totals[2])});
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

        let year2014 = [{id: 2014}];
        let year2015 = [{id: 2015}];
        let year2016 = [{id: 2016}];
        let year2017 = [{id: 2017}];
        let year2018 = [{id: 2018}];

        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          switch (element.anio) {
            case 2014:
              year2014.push(element.totalEntidadExterna);
              break;
            case 2015:
              year2015.push(element.totalEntidadExterna);
              break;
            case 2016:
              year2016.push(element.totalEntidadExterna);
              break;
            case 2017:
              year2017.push(element.totalEntidadExterna);
              break;
            case 2018:
              year2018.push(element.totalEntidadExterna);
              break;
          }
        }

        this.datos.push(year2014, year2015, year2016, year2017, year2018);
        break;
      case 4:
        this.headL.push('Grupo', 'Aporte', 'Numero de protocolos');
        for (let element of this.data) {
          this.datos.push({id: element.Grupo,
          first: element.productos,
          second: element.total});
        }
        break;
    }
  }
  groupBy = (originalData: any [], element: any) => {
    return originalData.reduce((list: any [], actual: any) => {
     const key = actual[element];
     if (!list[key]) {
         list[key] = [];
     }
     list[key].push(actual);
     return list;
   }, {});
  }
}
