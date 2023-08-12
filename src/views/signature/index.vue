<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <SignatureTable v-model:item="item"></SignatureTable>
  </div>
  <SignatureForm />
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import SignatureTable from "@/components-ekds/signature/SignatureTable.vue";
import DeviceCreate from "@/components-ekds/devices/DeviceCreate.vue";
import DeviceUpdate from "@/components-ekds/devices/DeviceUpdate.vue";
import SignatureForm from "@/components-ekds/signature/SignatureModal.vue";

export default defineComponent({
  name: "devices",
  components: {
    SignatureForm,
    DeviceCreate,
    SignatureTable,
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
