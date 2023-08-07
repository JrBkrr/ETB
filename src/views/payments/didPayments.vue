<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <RoleTable page="Devices" url="devices"></RoleTable>
  </div>
  <RoleVerificationCreate></RoleVerificationCreate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RoleTable from "@/components-ekds/verifications/roleverifications/RoleTable.vue";
import RoleVerificationCreate from "@/components-ekds/verifications/roleverifications/RoleVerificationCreate.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    RoleVerificationCreate,
    RoleTable
  },
});
</script>
