<template>
  <!--begin::Card-->
  <div class="row flex-column align-items-center justify-content-center h-100 px-10 ">
    <!--begin::Card body-->
    <div class="rounded h-100">
      <!--begin::Heading-->
      <!--begin::Title-->
      <h2 class="fs-2x fw-bold my-20 text-center">Henüz Yapım Aşamasında</h2>
      <!--end::Title-->
      <!--end::Heading-->
      
      <!--begin::Illustration-->
      <div class="text-center px-5 d-flex align-items-center justify-content-center">
        <img :src="getIllustrationsPath('4.png')" alt="dd" class="mh-600px mw-100 " />
      </div>
      <!--end::Illustration-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getIllustrationsPath} from "@/core/helpers/assets";

export default defineComponent({
  name: "didPayments",
  methods: {getIllustrationsPath},
  props: {
    title: String,
    description: String,
    buttonText: String,
    image: String,
    modalId: String,
  },
  components: {},
});
</script>
