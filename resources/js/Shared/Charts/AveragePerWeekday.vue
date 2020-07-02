<template>
    <div id="chart" class="amChart"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";

    export default {
        data() {
            return {
                chart: null,
            }
        },
        mounted() {
            am4core.useTheme(am4themes_animated);

            // Create chart instance
            this.chart = am4core.create("chart", am4charts.XYChart);

            // Export
            this.chart.exporting.menu = new am4core.ExportMenu();

            // Data for both series
            let data = [{
                "weekday": "Montag",
                "visits": 23.5,
                "expenses": 21.1
            }, {
                "weekday": "Dienstag",
                "visits": 26.2,
                "expenses": 30.5
            }, {
                "weekday": "Mittwoch",
                "visits": 30.1,
                "expenses": 34.9
            }, {
                "weekday": "Donnerstag",
                "visits": 29.5,
                "expenses": 31.1
            }, {
                "weekday": "Freitag",
                "visits": 30.6,
                "expenses": 28.2,
            }];

            /* Create axes */
            let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "weekday";
            categoryAxis.renderer.minGridDistance = 30;

            /* Create value axis */
            let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

            /* Create series */
            let columnSeries = this.chart.series.push(new am4charts.ColumnSeries());
            columnSeries.name = "Besuche";
            columnSeries.dataFields.valueY = "visits";
            columnSeries.dataFields.categoryX = "weekday";

            columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} am {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
            columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
            columnSeries.columns.template.propertyFields.stroke = "stroke";
            columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
            columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
            columnSeries.tooltip.label.textAlign = "middle";

            let lineSeries = this.chart.series.push(new am4charts.LineSeries());
            lineSeries.name = "Ausgaben";
            lineSeries.dataFields.valueY = "expenses";
            lineSeries.dataFields.categoryX = "weekday";

            lineSeries.stroke = am4core.color("#fdd400");
            lineSeries.strokeWidth = 3;
            lineSeries.propertyFields.strokeDasharray = "lineDash";
            lineSeries.tooltip.label.textAlign = "middle";

            let bullet = lineSeries.bullets.push(new am4charts.Bullet());
            bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
            bullet.tooltipText = "[#fff font-size: 15px]{name} am {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
            let circle = bullet.createChild(am4core.Circle);
            circle.radius = 4;
            circle.fill = am4core.color("#fff");
            circle.strokeWidth = 3;

            this.chart.data = data;

        }
    }
</script>

<style scoped>
    .amChart {
        height: 100%;
        min-height: 20em;
    }
</style>
