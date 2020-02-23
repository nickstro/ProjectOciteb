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
        let aporteEspecie = {data: [],
          label: 'Aporte Especie'};
        let aporteEfectivo = {data: [],
          label: 'Aporte Efectivo'};
        let aporteExterno = {data: [],
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

        break;
    }
  }
}
