import { Component } from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './hbar.component.html'
})
export class HbarComponent {
  data;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Numero de Proyectos'
        }
      }]
    }
  };

    // X
    public mbarChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = false;

    public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
    public barChartData:any[] = [
      {data: []}
    ];

  ngOnInit(): void {
    console.log(this.data);
    let years = [];
    let year = 2014;
    let value = 0;
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      years.push(element.anio);
      if (element.anio === year) {
        value += element.total;
      } else {
        this.barChartData[0].data.push(value);
        value = 0;
        index--;
        year = element.anio;
      }
    }

    this.mbarChartLabels = [...new Set(years)];
  }
}
