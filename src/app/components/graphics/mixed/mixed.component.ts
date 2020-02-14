import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.css']
})
export class MixedComponent implements OnInit {
  public data;
  private chart: am4charts.XYChart;
  constructor(private zone: NgZone) { }
  dataCopy = [];
  dataOrder = [];
  dataKeys = [];
  ngOnInit() {
    // @ts-ignore
    for (var element of this.data) {
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

  createGraphic() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.data = this.data;
      console.log(chart.data);
      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Tipo";
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;

      function createSeries(info1, info2, info3) {
      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.opposite = true;
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryY = info1;
      series.dataFields.valueX = info2;
      series.name = info2;
      series.columns.template.fillOpacity = 0.5;
      series.columns.template.strokeOpacity = 0;
      series.tooltipText = "Resultados {categoryY}: {valueX.value}";
      let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.categoryY = info1;
      lineSeries.dataFields.valueX = info2;
      lineSeries.name = info2;
      lineSeries.strokeWidth = 3;
      lineSeries.tooltipText = "Datos {categoryY}: {valueX.value}";
      let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
      circleBullet.circle.fill = am4core.color("#fff");
      circleBullet.circle.strokeWidth = 2;
      return series;
    }

    for (var j of this.dataCopy) {
      createSeries("Anio", j[2],j[3]);
    }

      //add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      //add legend
      chart.legend = new am4charts.Legend();
    });
  }
}
