<template>
  <form
      data-kt-search-element="form"
      class="w-100 position-relative d-none d-lg-block"
      autocomplete="off"
  >
    <input type="hidden"/>

    <!--begin::Icon-->
    <KTIcon
        icon-name="magnifier"
        icon-class="fs-2 search-icon position-absolute top-50 translate-middle-y ms-4"
    />
    <!--end::Icon-->

    <!--begin::Input-->
    <input
        type="text"
        class="search-input form-control ps-13 fs-7 h-40px"
        name="search"
        placeholder="Search..."
        data-kt-search-element="input"
        :value="payload"
        @input="PayloadEvent"
    />
    <!--end::Input-->

    <!--begin::Spinner-->
    <span
        class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
        data-kt-search-element="spinner"
    >
      <span
          class="spinner-border h-15px w-15px align-middle text-gray-400"
      ></span>
    </span>
    <!--end::Spinner-->

    <!--begin::Reset-->
    <span
        @click="PayloadEvent('')"
        :class="[!payload && 'd-none']"
        class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-4"
    >
      <KTIcon icon-name="cross" icon-class="fs-2 fs-lg-1 me-0"/>
    </span>
    <!--end::Reset-->
  </form>
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent} from "vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";

export default defineComponent({
  name: "inline-form",
  components: {KTIcon},
  props: {
    payload: String
  },
  setup(props, {emit}) {

    const PayloadEvent = (event) => {
      if (event.target instanceof HTMLInputElement) {
        const value = event.target.value.toString();
        emit("update:payload", value);
      }
    }
    return {
      getAssetPath,
      PayloadEvent
    };
  },
});
</script>
