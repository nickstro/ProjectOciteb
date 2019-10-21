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

  private chart: am4charts.XYChart;
  constructor(private zone: NgZone) { }
 

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv2", am4charts.XYChart);

      chart.data = [{"año":2015,"contrapartida":43,"sinfinaciacion":23,"capitalsemilla":110}];
      
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "año";
      categoryAxis.renderer.grid.template.location = 0;


      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.min = 0;
      function createSeries(field, name) {
  
  // Set up series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "año";
      series.sequencedInterpolation = true;
  
  // Make it stacked
      series.stacked = true;
  
  // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
  
  // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
  
    return series;
}
    createSeries("contrapartida", "Contrapartida");
    createSeries("sinfinaciacion", "Sinfinaciacion");
    createSeries("capitalsemilla", "Capitalsemilla");

    chart.legend = new am4charts.Legend();
  });


  }
}
