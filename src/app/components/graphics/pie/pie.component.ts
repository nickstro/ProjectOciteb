import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit{
 
  public data;
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }
  dataCopy = [];
  dataOrder = [];
  dataKeys = [];
  ngOnInit() {
    this.data.sort((a, b) => a.Anio - b.Anio);
    // @ts-ignore
    for (var element of res) {
      let obj = this.dataOrder.find(e =>
        e.Anio === element.Anio
      );
      if (!obj) {
        obj = { Anio: element.Anio };
        this.dataOrder.push(obj);
      }
      obj[element.Tipo] = element.Total;
    }

    for (var a of this.dataOrder) {
      this.dataKeys.push(a);
    }

    var aux = this.dataKeys;
    for (var i of aux) {
      if (aux.length = 1) {
      } else {
        aux.pop();
      }
    }
    for (var e of aux) {
      this.dataCopy.push(Object.keys(e));
    }
    this.createGraphic();


  }

  createGraphic(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0;
      // ... chart code goes here ...
      
      //chart.data = [{anio: "2014",valor: 43},{anio: "2015",valor: 28}];
      chart.data = this.dataOrder;
      
      chart.innerRadius = am4core.percent(40);
      chart.depth = 120;

      function createSeries(info1,info2){
        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = info2;
        series.dataFields.depthValue = info2;
        series.dataFields.category = info1;
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
          return series;
        }
      for(var j of this.dataCopy){          
         createSeries("Anio",j[2]);
      }
    });
  }
}
