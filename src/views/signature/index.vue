<template>
  <!--begin::Dashboard-->

  <div class="row align-items-center justify-content-center g-5 g-xl-8 h-100">
    <div class="col-md-4 text-center">
      <!--begin::Icon-->
      <div class="pt-10 pb-10">
        <!--<KTIcon icon-name="search-list" icon-class="fs-4x opacity-50" />-->
        <img class="col-12" :src="getAssetPath('./media/illustrations/sketchy-1/17.png')" alt="image"/>
      </div>
      <!--end::Icon-->

      <!--begin::Message-->
      <div class="pb-15">
        <h3 class="text-gray-600 fs-2qx mb-2">The under construction!</h3>
        <div class="text-muted fs-3">Please try again later!</div>
      </div>
      <!--end::Message-->
    </div>
  </div>

  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import {getAssetPath} from "@/core/helpers/assets";

export default defineComponent({
  name: "dashboard-main",
  methods: {getAssetPath},
  components: {
    KTIcon,
  },
});
</script>
