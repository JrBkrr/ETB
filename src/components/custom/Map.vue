<template>
  <div class="card">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bold text-dark">{{'Map'}}</span>

        <span class="text-muted mt-1 fw-semobold fs-7">Gifts and more</span>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
            type="button"
            class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2" />
        </button>
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <div class="testClass" ref="chartdiv">
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 8-->

</template>

<script setup lang="ts">
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { ref, onMounted, onUnmounted } from "vue";

const chartdiv = ref<HTMLElement | null>()
var root!: am5.Root;

onMounted(() => {
  if (chartdiv.value) {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    root = am5.Root.new(chartdiv.value);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "translateX",
          panY: "translateY",
          projection: am5map.geoMercator(),
          paddingLeft: 0,
          paddingBottom: 0
        })
    );

    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          exclude: ["AQ"],
        })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color('#4b4b4b'),
    });


    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color('#1BC5BD'),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color('#1BC5BD'),
    });

    // Highlighted Series
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeriesHighlighted = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          //geoJSON: am5geodata_usaLow,
          geoJSON: am5geodata_worldLow,
          include: ['US', 'BR', 'DE', 'AU', 'JP']
        })
    );

    polygonSeriesHighlighted.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
    });

    var colors = am5.ColorSet.new(root, {});

    polygonSeriesHighlighted.mapPolygons.template.set(
        "fill",
        am5.color('#3699FF'),
    );

    polygonSeriesHighlighted.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonHover"),
    });

    polygonSeriesHighlighted.mapPolygons.template.states.create("active", {
      fill: root.interfaceColors.get("primaryButtonHover"),
    });

    // Add zoom control
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
    //chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    // Set clicking on "water" to zoom out

    // Make stuff animate on load
    chart.appear(1000, 100);
  }
});

onUnmounted(() => {
  if (root) {
    root.dispose();
  }
});
</script>

<style scoped>
.testClass {
  width: 100%;
  height: 346px;
}
</style>