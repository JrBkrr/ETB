<template>
  <!--begin::Dashboard-->
  <div class="row g-5 g-xl-8 h-100">
    <VersionsTable widget-classes=""></VersionsTable>
  </div>
  <VersionCreate></VersionCreate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import VersionsTable from "@/components-ekds/versions/VersionsTable.vue";
import VersionCreate from "@/components-ekds/versions/VersionCreate.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    VersionsTable,
    VersionCreate
  },
});
</script>
