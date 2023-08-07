<template>
  <!--begin::Mixed Widget 7-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <!--begin::Stats-->
      <div class="flex-grow-1 card-p pb-0">
        <div class="d-flex flex-stack flex-wrap">
          <div class="me-2">
            <a href="#" class="text-dark text-hover-primary fw-bold fs-3"
            >{{ title }}</a>
            
            <div class="text-muted fs-7 fw-semobold">
              {{ 'Finance and accounting reports' }}
            </div>
          </div>
          
          <div :class="`text-${chartColor}`" class="fw-bold fs-3">{{ data }}</div>
        </div>
      </div>
      <!--end::Stats-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 7-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onBeforeMount, ref, watch} from "vue";
import {getCSSVariableValue} from "@/assets/ts/_utils";
import type VueApexCharts from "vue3-apexcharts";
import type {ApexOptions} from "apexcharts";
import {useThemeStore} from "@/stores/theme";

export default defineComponent({
  name: "widget-7",
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
    title: String,
    description: String,
    data: String
  },
  setup(props) {
    const chartRef = ref<typeof VueApexCharts | null>(null);
    let chart: ApexOptions = {};
    const store = useThemeStore();
    
    const series = ref([
      {
        name: "Net Profit",
        data: [15, 25, 15, 40, 20, 50],
      },
    ]);
    
    const themeMode = computed(() => {
      return store.mode;
    });
    
    
    return {
      chart,
      series,
      chartRef,
      getAssetPath,
    };
  },
});

</script>
