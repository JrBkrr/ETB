<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <DevicesTable v-model:item="item"></DevicesTable>
  </div>
  <DeviceCreate></DeviceCreate>
  <DeviceUpdate :item="item"></DeviceUpdate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import DevicesTable from "@/components-ekds/devices/DevicesTable.vue";
import DeviceCreate from "@/components-ekds/devices/DeviceCreate.vue";
import DeviceUpdate from "@/components-ekds/devices/DeviceUpdate.vue";

export default defineComponent({
  name: "devices",
  components: {
    DeviceCreate,
    DevicesTable,
    DeviceUpdate
  },
  setup() {
    const item = ref({})
    
    return {
      item
    }
  }
});
</script>
