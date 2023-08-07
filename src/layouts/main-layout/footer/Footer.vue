<template>
  <!--begin::Footer-->
  <div class="footer py-1 d-flex flex-lg-column" id="kt_footer">
    <!--begin::Container-->
    <div
        class="d-flex flex-column flex-md-row align-items-center justify-content-between"
        :class="{
        'container-fluid': !footerWidthFluid,
        'container-xxl': footerWidthFluid,
      }"
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-semobold me-1">2023&copy;</span>
        <a
            href="https://www.etb.com.tr/"
            target="_blank"
            class="text-gray-800 text-hover-primary"
        >ETB {{ translate('home') }}</a
        >
      </div>
      <!--end::Copyright-->
      
      <!--begin::Menu-->
      <ul class="menu menu-gray-600 menu-hover-primary fw-semobold order-1">
        <li class="menu-item">
          <a href="https://www.etb.com.tr/hakkimizda" target="_blank" class="menu-link px-2">{{ translate('about') }}</a>
        </li>
        
        <li class="menu-item">
          <a href="https://www.etb.com.tr/iletisim" target="_blank" class="menu-link px-2">{{ translate('support') }}</a>
        </li>
        
        <li class="menu-item">
          <a href="https://www.etb.com.tr/blog" target="_blank" class="menu-link px-2">{{ translate('purchase') }}</a>
        </li>
      </ul>
      <!--end::Menu-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {footerWidthFluid} from "@/core/helpers/config";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "KTFooter",
  setup() {
    const {t, te} = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    }
    return {
      footerWidthFluid,
      translate
    };
  },
});
</script>
