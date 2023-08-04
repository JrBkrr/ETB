<template>
  <!--begin::Logs-->
  <div class="row g-5 g-xl-8 h-100">
    <LogsTable page="Devices" url="devices"></LogsTable>
  </div>
  <!--end::Logs-->
</template>

<script>
import {defineComponent} from "vue";
import LogsTable from "@/components-ekds/logs/LogsTable.vue";

export default defineComponent({
  name: "logs",
  components: {LogsTable},
});
</script>