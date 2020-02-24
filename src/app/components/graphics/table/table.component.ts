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
        const headers = ['CENTRO DE INVESTIGACIÓN Y DESARROLLO TECNOLÓGICO', 'COLCIENCIAS',
        'EMPRESAS', 'ENTIDADES DEL GOBIERNO CENTRAL', 'ENTIDADES DEL GOBIERNO REGIONAL',
        'INSTITUCIONES DE EDUCACIÓN SUPERIOR'];
        this.headL.push('Año');
        this.headL.push(...headers);
        this.headL.push('Total');
        const yearsI03 = this.groupBy(this.data, 'anio');
        Object.keys(yearsI03).forEach((year) => {
          const line = [];
          headers.forEach((type, index) => {
            const result = yearsI03[year].find(({tipoEntidad}) => tipoEntidad === type);
            if (result) {
              line[index] = result.totalEntidadExterna;
            } else {
              line[index] = 0;
            }
          });
          this.datos.push({id: year, first: line[0],
          second: line[1], third: line[2],
          fourth: line[3], five: line[4], six: line[5],
          seven: line.map((data) => +data).reduce((total: number, actual) => (total + actual), 0)});
        });
        break;
      case 4:
        this.headL.push('Grupo', 'Aporte', 'Numero de protocolos');
        for (let element of this.data) {
          this.datos.push({id: element.Grupo,
          first: element.productos,
          second: element.total});
        }
        break;
      case 5:
        this.headL.push('Año', 'Aporte');
        let total = 0;
        for (const element of this.data) {
          this.datos.push({id: element.Anio,
          first: element.total});
          total += element.total;
        }
        this.datos.push({id: 'Total',
          first: total});
        break;
      case 6:
        this.headL.push('Año', 'Carrera', 'N° de Jovenes investigadores');
        let total6 = 0;
        for (const element of this.data) {
          this.datos.push({id: element.Anio,
          first: element.Programa,
          second: element.total});
          total6 += element.total;
        }
        this.datos.push({id: 'Total',
          second: total6});
        break;
      case 7:
        this.headL.push('Año', 'N° Estimado de Semilleros');
        let total7 = 0;
        for (const element of this.data) {
          this.datos.push({id: element.Anio,
          first: element.NoEstSemilleros});
          total7 += element.NoEstSemilleros;
        }
        this.datos.push({id: 'Total',
        first: total7});
        break;
      case 8:
        this.headL.push('Año', 'Clasificacion A1', 'Clasificacion A', 'Clasificacion B', 'Clasificacion C');
        for (let element of this.data) {
          this.datos.push({id: element.Anio,
          first: element.A1,
          second: element.A,
          third: element.B,
          fourth: element.C});
        }
        break;
      case 10:
        this.headL.push('Año', 'N° de libros');
        let total10 = 0;
        for (const element of this.data) {
          this.datos.push({id: element.Anio,
          first: element.total});
          total10 += element.total;
        }
        this.datos.push({id: 'Total',
        first: total10});
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
