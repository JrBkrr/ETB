<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <p>Yapım Aşamsında</p>
    <div class="text-center px-5">
      <img :src="getIllustrationsPath('20.png')" alt="" class="mw-100 mh-300px" />
    </div>
  </div>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RoleTable from "@/components-ekds/verifications/roleverifications/RoleTable.vue";
import RoleVerificationCreate from "@/components-ekds/verifications/roleverifications/RoleVerificationCreate.vue";
import {getIllustrationsPath} from "@/core/helpers/assets";

export default defineComponent({
  name: "dashboard-main",
  methods: {getIllustrationsPath},
  components: {
    RoleVerificationCreate,
    RoleTable
  },
});
</script>
