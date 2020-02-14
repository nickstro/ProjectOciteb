import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

export class LineComponent implements OnInit {
  public data;
  private chart: am4charts.XYChart;
  constructor(private zone: NgZone) { }
  dataCopy = [];
  dataOrder = [];
  dataKeys = [];
  ngOnInit() {
    console.log(this.data);
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
      let chart = am4core.create("chartdiv3", am4charts.XYChart);
      chart.data = this.dataOrder;

      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Anio";
      categoryAxis.renderer.opposite = true;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = true;
      valueAxis.title.text = "Resultados";
      valueAxis.renderer.minLabelPosition = 0.01;

      // Create series
      function createSeries(info1, info2, info3) {
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = info2;
        series.dataFields.categoryX = info1;
        series.name = info3;
        series.strokeWidth = 3;
        series.bullets.push(new am4charts.CircleBullet());
        series.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        series.legendSettings.valueText = "{valueY}";
        series.visible = false;
        return series;
      }


      for (var j of this.dataCopy) {
        var contador = Object.keys(j).length;
        for (var i = 1; i < contador; i++) {
          createSeries("Anio", j[i], j[i]);
        }
      }

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
    });
  }
}


