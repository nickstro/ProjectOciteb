import { Component,  } from '@angular/core';

@Component({
  selector: 'app-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.css']
})
export class StackedComponent {
  data;
  public barChartOptions: any = {
    scales: {
      xAxes: [{
          stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
  },
    responsive : true };
  public barChartLabels: string[] = [ '2014', '2015', '2016', '2017', '2018'];
  public barChartType: string = 'bar';
  public barChartLegend = true;
  public barChartPlugins = true;

 public barChartData: any[] = [
  { data: [65, 59, 80, 81, 56], label: 'Capital Semilla ' },
  { data: [28, 48, 40, 19, 86], label: 'Contrapartida' },
  { data: [28, 48, 40, 19, 86], label: 'Sin financiacion' }
];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
