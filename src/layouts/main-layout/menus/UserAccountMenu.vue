<template>
  <!--begin::Menu-->
  <div
      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold py-4 fs-6 w-275px z-999"
      data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          <span
              class="d-inline-block w-100 h-100 text-white px-5 py-3 text-hover-primary cursor-pointer symbol symbol-50px fs-1 fw-bold bg-light-dark">{{
              (Profile?.username ?? "-")[0].toUpperCase()
                                                                                                                                                      }}</span>
          <!--          <img alt="Logo" :src="getAssetPath('media/avatars/300-1.jpg')"/>-->
        </div>
        <!--end::Avatar-->
        
        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bold d-flex align-items-center fs-5">
            {{ `${(Profile?.username ?? "-")}` }}
            <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2"
            >Pro</span
            >
          </div>
          <a class="fw-semobold text-muted text-hover-primary fs-7" href="#"
          >{{ (Profile?.email ?? "-") }}</a
          >
        </div>
        <!--end::Username-->
      </div>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link class="menu-link px-5" to="/my-profile">
        {{ translate('myProfile') }}
      </router-link>
    </div>
    <!--end::Menu item-->
    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link class="menu-link px-5" to="/my-profile">
        {{ translate('payments') }}
      </router-link>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="d-none menu-item px-5">
      <router-link class="menu-link px-5" to="/crafted/pages/profile/overview">
        My Statements
      </router-link>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a class="menu-link px-5" @click="signOut()">{{ translate('signOut') }}</a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted} from "vue";
import {useI18n} from "vue-i18n";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  name: "kt-user-menu",
  components: {},
  
  setup() {
    const {State, Action_Start} = GlobalStore()
    const store = useAuthStore();
    const router = useRouter();
    const i18n = useI18n();
    const {t, te} = useI18n();
    const GetLocalProfile = localStorage.getItem('user')
    
    const Profile = computed(() => {
      if (Object.keys(State.Profile).length > 0) {
        return State.Profile
      } else if (GetLocalProfile) {
        return GetLocalProfile
      } else {
        // router.push('sign-in')
      }
    })
    
    i18n.locale.value = localStorage.getItem("lang")
        ? (localStorage.getItem("lang") as string)
        : "tr";
    
    const signOut = () => {
      store.logout();
      State.Notifications.push({head: 'Çıkış Yapılıyor', title: 'İyi günler..', variant: 'primary', status: false})
      setTimeout(() => router.push({name: "sign-in"}), 1500)
    };
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    
    return {
      signOut,
      getAssetPath,
      Profile,
      translate
    };
  },
});
</script>