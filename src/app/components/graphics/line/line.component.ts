import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

export class LineComponent implements OnInit {
  public data;
  public type;

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
    switch (this.type) {
      case 1:
        const aporteEspecie = {data: [],
          label: 'Aporte Especie'};
        const aporteEfectivo = {data: [],
          label: 'Aporte Efectivo'};
        const aporteExterno = {data: [],
          label: 'Aporte Externo'};
        for (const element of this.data) {
          this.lineChartLabels.push(element.anio);
          aporteEspecie.data.push(element.AporteEspecie);
          aporteEfectivo.data.push(element.AporteEfectivo);
          aporteExterno.data.push(element.AporteExterno);
        }
        this.lineChartData.push(aporteEspecie, aporteEfectivo, aporteExterno);
        break;
      case 2:
        const aporteCentro = {data: [],
          label: 'Centro de investigación y desarrollo tecnológico'};
        const aporteColciencias = {data: [],
          label: 'Colciencias'};
        const aporteEmpresas = {data: [],
          label: 'Empresas'};
        const aporteGobC = {data: [],
          label: 'Entidades del gobierno central'};
        const aporteGobR = {data: [],
          label: 'Entidades del gobierno regional'};
        const aporteInst = {data: [],
          label: 'Instituciones de educacion superior'};

        for (const element of this.data) {
          switch (element.tipoEntidad) {
            case 'CENTRO DE INVESTIGACIÓN Y DESARROLLO TECNOLÓGICO':
              aporteCentro.data.push(element.totalEntidadExterna);
              break;
            case 'COLCIENCIAS':
              aporteColciencias.data.push(element.totalEntidadExterna);
              break;
            case 'EMPRESAS':
              aporteEmpresas.data.push(element.totalEntidadExterna);
              break;
            case 'ENTIDADES DEL GOBIERNO CENTRAL':
              aporteGobC.data.push(element.totalEntidadExterna);
              break;
            case 'ENTIDADES DEL GOBIERNO REGIONAL':
              aporteGobR.data.push(element.totalEntidadExterna);
              break;
            case 'INSTITUCIONES DE EDUCACIÓN SUPERIOR':
              aporteInst.data.push(element.totalEntidadExterna);
              break;
          }
        }
        this.lineChartData.push(aporteCentro, aporteColciencias, aporteEmpresas, aporteGobC, aporteGobR, aporteInst);
        this.lineChartLabels = ['2014', '2015', '2016', '2017', '2018'];
        break;
      case 6:
        const aporte6 = {data: [],
          label: 'Aporte Especie'};
        for (const element of this.data) {
          this.lineChartLabels.push(element.Anio);
          aporte6.data.push(element.total);
        }
        this.lineChartData.push(aporte6);
        break;
      case 7:
        const aporte7 = {data: [],
          label: 'N° Estimado de semilleros'};
        for (const element of this.data) {
          this.lineChartLabels.push(element.Anio);
          aporte7.data.push(element.NoEstSemilleros);
        }
        this.lineChartData.push(aporte7);
        break;
    }
  }
}
