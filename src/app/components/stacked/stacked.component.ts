import { Component,  } from '@angular/core';

@Component({
  selector: 'app-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.css']
})
export class StackedComponent {
  public barChartOptions: any ={
    scales: {
      xAxes: [{
          stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
  },
    responsive : true };
  public barChartLabels: string[] = [ '2013', '2014', '2015','2016', '2017', '2018', '2019'];
  public barChartType: string = 'bar';
  public barChartLegend = true;
  public barChartPlugins = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pedidos colegios ' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Pedidos particulares' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Pedidos particulares' }
  ];


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
