<template>
  <!--begin::Dashboard-->
  <div class="row g-5 g-xl-8 h-100">
    <AllTable page="Devices" url="devices"></AllTable>
  </div>
  <DeviceCreate></DeviceCreate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllTable from "@/components-ekds/verifications/AllTable.vue";
import DeviceCreate from "@/components-ekds/devices/DeviceCreate.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    DeviceCreate,
    AllTable
  },
});
</script>
