<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <AllTable page="Devices" url="devices"></AllTable>
  </div>
  <VerificationCreate></VerificationCreate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AllTable from "@/components-ekds/verifications/allverifications/AllTable.vue";
import VerificationCreate from "@/components-ekds/verifications/allverifications/VerificationCreate.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    VerificationCreate,
    AllTable
  },
});
</script>
