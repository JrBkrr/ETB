<template>
  <!--begin::Mixed Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">{{ title }}</span>
        <span class="text-muted fw-semobold fs-7"
        >Complete your profile setup</span
        >
      </h3>

      <!--      <div class="card-toolbar">-->
      <!--        &lt;!&ndash;begin::Menu&ndash;&gt;-->
      <!--        <button-->
      <!--            type="button"-->
      <!--            class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"-->
      <!--            data-kt-menu-trigger="click"-->
      <!--            data-kt-menu-placement="bottom-end"-->
      <!--            data-kt-menu-flip="top-end"-->
      <!--        >-->
      <!--          <KTIcon icon-name="category" icon-class="fs-2"/>-->
      <!--        </button>-->
      <!--        <Dropdown1></Dropdown1>-->
      <!--        &lt;!&ndash;end::Menu&ndash;&gt;-->
      <!--      </div>-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="w-100 d-flex align-items-center justify-content-center">
        <!--begin::Chart-->
        <apexchart
            ref="chartRef"
            class="mixed-widget-4-chart"
            :options="chart"
            :series="series"
            :height="300"
            type="donut"
        ></apexchart>
        <!--end::Chart-->
      </div>

    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 4-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onBeforeMount, onMounted, reactive, ref, watch} from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import {getCSSVariableValue} from "@/assets/ts/_utils";
import type VueApexCharts from "vue3-apexcharts";
import type {ApexOptions} from "apexcharts";
import {useThemeStore} from "@/stores/theme";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown1,
  },
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
    btnColor: String,
    title: String,
    labels: Array,
    labelsColor: Array,
    data: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {State} = GlobalStore()
    const title = ref(props.title)
    const chartRef = ref<typeof VueApexCharts | null>(null);
    let chart: ApexOptions = {};
    const store = useThemeStore();

    const series = ref([100, 50])

    // onMounted(() => {
    //   const dashboardValue = State.Dashboard[props.series];
    //   if (dashboardValue) {
    //     console.log(dashboardValue)
    //     series.value = [dashboardValue, dashboardValue];
    //   } else {
    //     // Eğer anahtar yoksa ya da değer uygun değilse bir varsayılan değeri kullanabilirsiniz:
    //     series.value = [100, 50];
    //   }
    // })

    watch(State, () => {
      const dashboardValue = State.Dashboard[props.data];
      series.value = [parseInt(dashboardValue > 0 ? dashboardValue : 1), parseInt(dashboardValue > 0 ? dashboardValue : 1)];
    });

    const themeMode = computed(() => {
      return store.mode;
    });

    onBeforeMount(() => {
      Object.assign(chart, chartOptions(props.chartColor, props.chartHeight, props.labels, props.labelsColor));
    });

    const refreshChart = () => {
      if (!chartRef.value) {
        return;
      }

      Object.assign(chart, chartOptions(props.chartColor, props.chartHeight, props.labels, props.labelsColor));

      chartRef.value.refresh();
    };

    watch(themeMode, () => {
      refreshChart();
    });

    return {
      chart,
      series,
      chartRef,
      getAssetPath,
      title
    };
  },
});

const chartOptions = (
    color: string = "primary",
    height: string = "1000",
    labels: any,
    colorLabels: any = [],
): ApexOptions => {
  const baseColor = getCSSVariableValue(`--bs-${color}`);
  const lightColor = getCSSVariableValue(`--bs-${color}-light`);
  const labelColor = getCSSVariableValue("--bs-gray-700");
  const labelsColor = [getCSSVariableValue(`--bs-${colorLabels[0]}`), getCSSVariableValue(`--bs-${colorLabels[1]}`)];

  return {
    chart: {
      width: 380,
      height: height,
      type: 'donut',
    },
    colors: [labelsColor[0], labelsColor[1]],
    dataLabels: {
      enabled: true,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          show: false
        }
      }
    }],
    stroke: {
      width: 4,
      colors: [lightColor]
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '30',
              fontWeight: '',
              color: baseColor,
            },
            value: {
              show: true,
              fontSize: '20',
              color: baseColor,
            },
            total: {
              show: true,
              showAlways: false,
              fontSize: '15',
              color: labelColor,
            }
          }
        }
      }
    },
    legend: {
      show: true,
      fontSize: '15',
      position: 'bottom',
      labels: {
        useSeriesColors: true
      },
      markers: {
        width: 10,
        height: 10,
        offsetX: -5,
        radius: 5,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true
      },
      onItemHover: {
        highlightDataSeries: true
      }
    },
    labels: labels || ['One', 'Two'],
    tooltip: {
      enabled: false
    }
  }
};
</script>
