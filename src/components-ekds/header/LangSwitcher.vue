<template>
  <!--begin::Menu-->
  <div
      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
      data-kt-menu="true"
      data-kt-element="theme-mode-menu"
  >
    <!--begin::Menu item-->
    <div v-for="lang in countries" class="menu-item px-3 my-0">
      <a
          @click="setLang(lang.key)"
          
          class="menu-link d-flex px-5"
          :class="{ active: currentLanguage === lang.key }"
      >
            <span class="symbol symbol-20px me-4">
              <img
                  class="rounded-1"
                  :src="lang.flag"
                  alt="metronic"
              />
            </span>
        {{ lang.name }}
      </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent} from "vue";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "kt-theme-switcher",
  component: {},
  setup() {
    const i18n = useI18n();
    const {t, te} = useI18n();
    
    i18n.locale.value = localStorage.getItem("lang")
        ? (localStorage.getItem("lang") as string)
        : "tr";
    
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
    
    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };
    
    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });
    
    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });
    
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    
    return {
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries,
      getAssetPath,
      translate
    };
  },
});
</script>
