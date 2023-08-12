<template>
  <div class="card">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 pt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bold text-dark">{{ 'Map' }}</span>
        
        <span class="text-muted mt-1 fw-semobold fs-7">Gifts and more</span>
      </h3>
      
      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
            class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-flip="top-end"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-trigger="click"
            type="button"
        >
          <KTIcon icon-class="fs-2" icon-name="category" />
        </button>
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->
    
    <!--begin::Body-->
    <div class="card-body pb-8">
      <div id="chartdiv" ref="chartdiv" class="min-h-300px w-100 h-100">
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 8-->

</template>

<script lang="ts" setup>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {ref, onMounted, onUnmounted, watch, computed} from "vue";
import {GlobalStore} from "@/stores/global";

interface Geometry {
  coordinates: [number, number]
}

interface EventData {
  target: {
    dataItem: {
      dataContext: {
        geometry: {
          coordinates: [number, number]
        }
      };
    };
  };
}

const {State, Action_Start} = GlobalStore()
const chartdiv = ref<HTMLElement | null>()
let root!: am5.Root;
const TargetLocation = computed(() => State.TargetLocation)
let chart;

watch(TargetLocation, (NV, OV) => {
  console.log(NV)
  if (NV.coordinates[0] !== OV.coordinates[0]) {
    chart.zoomToGeoPoint({latitude: NV.coordinates[1], longitude: NV.coordinates[0]}, 8, true, 4000);
  }
}, {deep: true})


onMounted(async () => {
  if (chartdiv.value) {
    root = am5.Root.new(chartdiv.value);
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);
    
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "rotateX",
          panY: "translateY",
          projection: am5map.geoOrthographic(),
        })
    );
    
    let cont = chart.children.push(
        am5.Container.new(root, {
          layout: root.horizontalLayout,
          x: 30,
          y: 20
        })
    );
    
    // Add labels and controls
    cont.children.push(
        am5.Label.new(root, {
          centerY: am5.p50,
          text: "Map",
          fill: "#fff",
        })
    );
    
    let switchButton = cont.children.push(
        am5.Button.new(root, {
          themeTags: ["switch"],
          centerY: am5.p50,
          icon: am5.Circle.new(root, {
            themeTags: ["icon"]
          })
        })
    );
    
    switchButton.on("active", function () {
      if (switchButton.get("active")) {
        chart.set("projection", am5map.geoMercator());
        chart.set("panY", "translateY");
        chart.set("rotationY", 0);
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
      } else {
        chart.set("projection", am5map.geoOrthographic());
        chart.set("panY", "rotateY");
        
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
      }
    });
    
    
    cont.children.push(
        am5.Label.new(root, {
          centerY: am5.p50,
          text: "Globe",
          fill: "#ffff",
        })
    );
    
    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    let backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0
    });
    
    // Add background polygon
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });
    
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          fill: '#5E00FFFF',
        })
    );
    
    // Create line series for trajectory lines
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
    let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.3
    });
    
    // Create point series for markers
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
    let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    let colorset = am5.ColorSet.new(root, {});
    
    
    pointSeries.bullets.push(function () {
      let container = am5.Container.new(root, {
        tooltipText: "{title}",
        cursorOverStyle: "pointer"
      });
      
      const generatedColor = colorset.next()
      
      container.events.on("click", (event) => {
        const data = event as EventData;
        if (data) {
          const coordinates = data.target.dataItem.dataContext.geometry.coordinates
          State.TargetLocation = {...data, coordinates, color: generatedColor};
        }
      });
      
      let circle = container.children.push(
          am5.Circle.new(root, {
            radius: 4,
            tooltipY: 0,
            fill: generatedColor,
            strokeOpacity: 0,
          })
      );
      
      
      let circle2 = container.children.push(
          am5.Circle.new(root, {
            radius: 4,
            tooltipY: 0,
            fill: generatedColor,
            strokeOpacity: 0,
            tooltipText: "{title}"
          })
      );
      
      circle.animate({
        key: "scale",
        from: 1,
        to: 4,
        duration: 3000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });
      
      circle.animate({
        key: "opacity",
        from: 1,
        to: 0,
        duration: 3000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });
      
      return am5.Bullet.new(root, {
        sprite: container
      });
    });
    
    await Action_Start('get', 'devices', 'Devices')
    State.Devices.map((item) => {
      let city = item;
      addCity(city.id, city.longitude, city.latitude, city.serialNumber);
    })
    
    function addCity(id, longitude, latitude, title) {
      pointSeries.data.push({
        id: id,
        geometry: {type: "Point", coordinates: [longitude, latitude]},
        title: title
      });
    }
    
    // Make stuff animate on load
    chart.appear(1000, 100);
    
    setTimeout(() => {
      switchButton.set("active", false);
    }, 2000)
    
  }
});

onUnmounted(() => {
  if (root) {
    root.dispose();
  }
});
</script>