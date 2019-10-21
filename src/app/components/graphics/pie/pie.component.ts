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
 

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0;
      // ... chart code goes here ...
      
      //chart.data = [{anio: "2014",valor: 43},{anio: "2015",valor: 28}];
      chart.data = [{anio: "2014",valor: 43},{anio: "2015",valor: 28}];
      console.log(chart.data);
      chart.innerRadius = am4core.percent(40);
      chart.depth = 120;

      chart.legend = new am4charts.Legend();

      let series = chart.series.push(new am4charts.PieSeries3D());
      series.dataFields.value = "valor";
      series.dataFields.depthValue = "valor";
      series.dataFields.category = "anio";
      series.slices.template.cornerRadius = 5;
      series.colors.step = 3;
    });
  }
}
