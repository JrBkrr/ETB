<template>
  <!--begin::Dashboard-->
  <div class="row g-5 g-xl-8 h-100">
    <RoleTable page="Devices" url="devices"></RoleTable>
  </div>
  <DeviceCreate></DeviceCreate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoleTable from "@/components-ekds/verifications/RoleTable.vue";
import DeviceCreate from "@/components-ekds/devices/DeviceCreate.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    DeviceCreate,
    RoleTable
  },
});
</script>
