<template>
  <!--begin::Statistics Widget 5-->
  <a :class="[widgetClasses, `bg-${color}`]" class="card hoverable">
    <!--begin::Body-->
    <div class="d-flex flex-column p-6">
      <i :class="`bi-${iconName}`" class="bi text-white fs-2x"></i>
      
      <div :class="`text-inverse-${color}`" class="fw-bold fs-5 text-nowrap mb-2 mt-3">
        {{ title }}
      </div>
    </div>
    <!--end::Body-->
  </a>
  <!--end::Statistics Widget 5-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent} from "vue";

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
    color: String,
    iconColor: String,
    iconName: String,
    title: String,
    description: String,
  },
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
