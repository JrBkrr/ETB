<template>
  <!--begin::Authentication Layout -->
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <!--begin::Body-->
    <div
        class="d-flex flex-column flex-lg-row-fluid justify-content-between w-lg-50 p-10 order-2 order-lg-2 h-100"
    
    >
      <!--begin::Theme mode-->
      <div class="d-flex justify-content-end position-relative" @mouseleave="LangStatus = false">
        <!--begin::Menu toggle-->
        <a
            class="btn btn-sm btn-icon-muted btn-active-icon-primary p-0"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            @click="LangStatus = true"
            @mouseenter="LangStatus = true"
        >
          <img
              :src="currentLangugeLocale.flag"
              alt="metronic"
              class="w-25px h-25px rounded-1"
          />
        </a>
        <!--begin::Menu toggle-->
        <div :class="[LangStatus && 'lang-active']" class="lang-passive pt-3">
          <!--begin::Menu-->
          <div
              class="d-block menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
              data-kt-element="theme-mode-menu"
              data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div v-for="lang in countries" class="menu-item px-3 my-0">
              <a
                  :class="{ active: currentLanguage === lang.key }"
                  class="menu-link d-flex px-5"
                  href="#"
                  @click="setLang(lang.key)"
              >
            <span class="symbol symbol-20px me-4">
              <img
                  :src="lang.flag"
                  alt="metronic"
                  class="rounded-1"
              />
            </span>
                {{ lang.name }}
              </a>
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </div>
      </div>
      <!--end::Theme mode-->
      <!--begin::Form-->
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <!--begin::Wrapper-->
        <div class="col-12 col-md-8 col-xxl-8 p-10">
          <router-view></router-view>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Form-->
      
      <!--begin::Footer-->
      <div class="d-flex flex-center flex-wrap px-5">
        <!--begin::Links-->
        <div class="d-flex fw-semibold text-primary fs-base">
          <a class="px-5" href="#" target="_blank">{{ translate('terms') }}</a>
          
          <a class="px-5" href="#" target="_blank">{{ translate('plans') }}</a>
          
          <a class="px-5" href="#" target="_blank">{{ translate('contactUs') }}</a>
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Body-->
    
    <!--begin::Aside-->
    <div
        :style="`background-image: url('${getAssetPath('media/misc/auth-bg.png')}')`"
        class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-1"
    >
      <!--begin::Content-->
      <div
          class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100"
      >
        <!--begin::Logo-->
        <router-link class="mb-0 mb-lg-12" to="/">
          <img
              :src="getAssetPath('media/logos/etb.svg')"
              alt="Logo"
              class=""
          />
        </router-link>
        <!--end::Logo-->
        
        <!--begin::Image-->
        <img
            :src="getAssetPath('media/illustrations/dozzy-1/6.png')"
            alt=""
            class="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
        />
        <!--end::Image-->
        
        <!--begin::Title-->
        <h1
            class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7"
        >
          {{ translate('fast') }},{{ translate('efficient') }} and {{ translate('productive') }}
        </h1>
        <!--end::Title-->
        
        <!--begin::Text-->
        <div class="d-none d-lg-block text-white fs-base text-center">
          {{ translate('loginDescription') }}
        </div>
        
        <!--        <div class="d-none d-lg-block text-white fs-base text-center">-->
        <!--          In this kind of post,-->
        <!--          <a href="#" class="opacity-75-hover text-warning fw-bold me-1"-->
        <!--          >the blogger</a-->
        <!--          >-->
        <!--          -->
        <!--          introduces a person they’ve interviewed <br />-->
        <!--          and provides some background information about-->
        <!--          -->
        <!--          <a href="#" class="opacity-75-hover text-warning fw-bold me-1"-->
        <!--          >the interviewee</a-->
        <!--          >-->
        <!--          and their <br />-->
        <!--          work following this is a transcript of the interview.-->
        <!--        </div>-->
        <!--end::Text-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Aside-->
  </div>
  <!--end::Authentication Layout -->
  
  <Notification />
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted, ref} from "vue";
import LayoutService from "@/core/services/LayoutService";
import {useBodyStore} from "@/stores/body";
import {useI18n} from "vue-i18n";
import LangSwitcher from '@/components-ekds/header/LangSwitcher.vue'
import Notification from "@/components-ekds/notification/notification.vue";

export default defineComponent({
  name: "auth-layout",
  components: {Notification, LangSwitcher},
  setup() {
    const store = useBodyStore();
    const {t, te} = useI18n();
    const i18n = useI18n();
    const LangStatus = ref(false)
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    
    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);
      
      store.addBodyClassname("app-blank");
      store.addBodyClassname("bg-body");
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
    
    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
      LangStatus.value = false
    };
    
    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });
    
    
    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });
    
    return {
      getAssetPath,
      translate,
      currentLangugeLocale,
      LangStatus,
      countries,
      setLang,
      currentLanguage
    };
  },
});
</script>

<style scoped>
.lang-passive {
  display:    block;
  position:   absolute;
  top:        100%;
  transform:  translateY(-10px);
  opacity:    0;
  visibility: hidden;
  transition: all .2s;
  }

.lang-active {
  transform:  translate(0);
  opacity:    1;
  visibility: visible;
  transition: all .1s;
  }
</style>
