<template>
  <!--begin::Action group-->
  <div class="d-flex align-items-stretch overflow-auto pt-3 pt-lg-0 gap-6">
    <!--begin::Theme mode-->
    <div class="d-flex align-items-center">
      <!--begin::Menu toggle-->
      <a
          href="#"
          class="btn btn-sm btn-icon btn-icon-muted btn-active-icon-primary"
          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
      >
        <KTIcon icon-name="night-day" icon-class="theme-light-show fs-2"/>
        <KTIcon icon-name="moon" icon-class="theme-dark-show fs-2"/>
      </a>
      <!--begin::Menu toggle-->
      <KTThemeModeSwitcher></KTThemeModeSwitcher>
    </div>
    <!--end::Theme mode-->


    <!--begin::Theme mode-->
    <div class="d-flex align-items-center">
      <!--begin::Menu toggle-->
      <a
          href="#"
          class="btn btn-sm btn-icon-muted btn-active-icon-primary p-0"
          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
      >
        <img
            class="w-25px h-25px rounded-1"
            :src="currentLangugeLocale.flag"
            alt="metronic"
        />
      </a>
      <!--begin::Menu toggle-->
      <LangSwitcher></LangSwitcher>
    </div>
    <!--end::Theme mode-->
  </div>
  <!--end::Action group-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted} from "vue";
import noUiSlider from "nouislider";
import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";
import LangSwitcher from "@/components-ekds/header/LangSwitcher.vue";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTThemeModeSwitcher,
    LangSwitcher
  },
  setup() {
    const i18n = useI18n();
    const initSlider = (): void => {
      const slider: noUiSlider.Instance = document.querySelector(
          "#kt_toolbar_slider"
      ) as noUiSlider.Instance;
      const rangeSliderValueElement: Element | null = document.querySelector(
          "#kt_toolbar_slider_value"
      );

      if (!slider) {
        return;
      }

      slider.innerHTML = "";

      noUiSlider.create(slider, {
        start: [5],
        connect: [true, false],
        step: 1,
        range: {
          min: [1],
          max: [10],
        },
      });

      slider.noUiSlider.on("update", function (values: any, handle: any) {
        if (!rangeSliderValueElement) {
          return;
        }

        rangeSliderValueElement.innerHTML = parseInt(values[handle]).toFixed(1);
      });
    };

    onMounted(() => {
      initSlider();
    });
    const countries = {
      tr: {
        flag: getAssetPath("media/flags/turkey.svg"),
        name: "Turkish",
        key: 'tr'
      },
      en: {
        flag: getAssetPath("media/flags/united-states.svg"),
        name: "English",
        key: 'en'
      },
      es: {
        flag: getAssetPath("media/flags/spain.svg"),
        name: "Spanish",
        key: 'es'
      },
      de: {
        flag: getAssetPath("media/flags/germany.svg"),
        name: "German",
        key: 'de'
      },
      ja: {
        flag: getAssetPath("media/flags/japan.svg"),
        name: "Japanese",
        key: 'ja'
      },
      fr: {
        flag: getAssetPath("media/flags/france.svg"),
        name: "French",
        key: 'fr'
      },
    };

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });

    return {
      getAssetPath,
      currentLangugeLocale
    };
  },
});
</script>
