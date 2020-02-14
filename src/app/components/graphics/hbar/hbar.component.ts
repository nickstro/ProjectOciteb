import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-hbar',
  templateUrl: './hbar.component.html',
  styleUrls: ['./hbar.component.css']
})
export class HbarComponent implements OnInit {

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
      chart.data = this.dataOrder;
      console.log(this.data);

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Anio";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;

      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

      // Create series
      function createSeries(info1, info2) {
        let series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueX = info2;
        series.dataFields.categoryY = info1;
        series.name = info2;
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.tooltipText = "{valueX}";
        series.columns.template.column3D.stroke = am4core.color("#fff");
        series.columns.template.column3D.strokeOpacity = 0.2;
        return series;
      }
      for (var j of this.dataCopy) {
        createSeries("Anio", j[2]);
      }
    });
  }
}
