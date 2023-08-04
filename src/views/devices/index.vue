<template>
  <!--begin::Dashboard-->
  <div class="row g-5 g-xl-8 h-100">
    <DevicesTable v-model:item="item"></DevicesTable>
  </div>
  <DeviceCreate></DeviceCreate>
  <DeviceUpdate :item="item"></DeviceUpdate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import DevicesTable from "@/components-ekds/devices/DevicesTable.vue";
import DeviceCreate from "@/components-ekds/devices/DeviceCreate.vue";
import DeviceUpdate from "@/components-ekds/devices/DeviceUpdate.vue";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  name: "dashboard-main",
  components: {
    DeviceCreate,
    DevicesTable,
    DeviceUpdate
  },
  setup() {
    const {Action_Start} = GlobalStore()
    const item = ref({})

    return {
      item
    }
  }
});
</script>
