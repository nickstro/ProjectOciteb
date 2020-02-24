import { Component } from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './hbar.component.html'
})
export class HbarComponent {
  data;
  type;
  datos;

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
      backgroundColor: '#39A2AE',
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
      {data: [], label: ''}
    ];

  ngOnInit(): void {
    switch (this.type) {
      case 1:
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
        year = element.anio;
        value = 0;
        index--;
          }
        }
        this.mbarChartLabels = [...new Set(years)];

        break;
      case 4:
        let leyends = [];
        for (const element of this.data) {
          leyends.push(element.Grupo);
          this.barChartData[0].data.push(element.total);
        }
        this.mbarChartLabels = leyends;

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Aporte'
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Grupos'
              }
            }]
          }
        };

        break;
      case 5:
        this.barChartType = 'horizontalBar';
        let leyends5 = [];
        for (const element of this.data) {
          leyends5.push(element.Anio);
          this.barChartData[0].data.push(element.total);
        }
        this.mbarChartLabels = leyends5;
        break;
      case 6:
        let years6 = [];
        let year6 = 2016;
        let value6 = 0;
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          years6.push(element.Anio);
          if (element.Anio === year6) {
            value6 += element.total;
          } else {
            this.barChartData[0].data.push(value6);
            value6 = 0;
            year6 = element.Anio;
            index--;
          }
        }

        this.mbarChartLabels = [...new Set(years6)];

        this.barChartType = 'horizontalBar';

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Año'
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Cantidad de Jovenes investigadores'
              }
            }]
          }
        };
        break;
      case 7:
        for (const element of this.data) {
          this.barChartData[0].data.push(element.NoEstSemilleros);
          this.mbarChartLabels.push(element.Anio);
        }

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'N° Estimado de semilleros'
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Año'
              }
            }]
          }
        };
        break;
      case 8:
        let a1 =
        {data: [], label: 'A1'};
        let a =
        {data: [], label: 'A'};
        let b =
        {data: [], label: 'B'};
        let c =
        {data: [], label: 'C'};

        for (const element of this.data) {
          this.mbarChartLabels.push(element.Anio);
          a1.data.push(element.A1);
          a.data.push(element.A);
          b.data.push(element.B);
          c.data.push(element.C);
        }

        this.barChartType = 'horizontalBar';

        this.barChartData.push(a1, a, b, c);
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Cantidad de grupos de investigacion'
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Año'
              }
            }]
          }
        };
        break;
      case 9:
        let invYears = [];
        let invSenior =
        {data: [], label: 'Investigador Senior (IS)'};
        let invJunior =
        {data: [], label: 'Investigador Junior (IJ)'};
        let invAsoc =
        {data: [], label: 'Investigador Asociado (IA)'};
        for (const element of this.data) {
          invYears.push(element.Anio);
          switch (element.Tipo) {
            case 'Investigador S�nior (IS)':
              invSenior.data.push(element.total);
              break;
            case 'Investigador Junior (IJ)':
              invJunior.data.push(element.total);
              break;
            case 'Investigador Asociado (IA)':
              invAsoc.data.push(element.total);
              break;
          }
        }
        this.barChartData.push(invSenior, invJunior, invAsoc);
        this.mbarChartLabels = [...new Set(invYears)];
        break;
      case 10:
        let libros =
        {data: [], label: 'Libros'};
        for (const element of this.data) {
          this.mbarChartLabels.push(element.Anio);
          libros.data.push(element.total);
        }
        this.barChartData.push(libros);
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
