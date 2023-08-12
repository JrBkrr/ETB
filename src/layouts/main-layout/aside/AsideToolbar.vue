<template>
  <!--begin::User-->
  <div
      class="aside-user d-flex align-items-sm-center justify-content-center py-5"
  >
    <!--begin::Symbol-->
    <div class="symbol symbol-50px fs-1 fw-bold bg-light-dark">
      <!--      <img :src="getAssetPath('media/avatars/300-31.jpg?>')" alt=""/>-->
      <router-link class="d-inline-block w-100 h-100 text-dark px-5 py-3 text-hover-primary cursor-pointer"
                   to="/my-profile">
        {{ (Profile?.username ?? "-")[0].toUpperCase() }}
      </router-link>
    </div>
    <!--end::Symbol-->
    
    <!--begin::Wrapper-->
    <div class="aside-user-info flex-row-fluid flex-wrap ms-5">
      <!--begin::Section-->
      <div class="d-flex">
        <!--begin::Info-->
        <div class="flex-grow-1 me-2">
          <!--begin::Username-->
          <router-link class="text-white text-hover-primary fs-6 fw-semobold" to="/my-profile"
          >{{ (Profile?.username ?? "-") }}
          </router-link
          >
          <!--end::Username-->
          
          <!--begin::Description-->
          <span class="text-gray-600 fw-semobold d-block fs-8 mb-1">{{ `${(Profile?.name ?? "-")} ${Profile?.surname ?? '-'} ` }}</span>
          <!--end::Description-->
          
          <!--begin::Label-->
          <div class="d-flex align-items-center text-success fs-9">
            <span class="bullet bullet-dot bg-success me-1"></span>online
          </div>
          <!--end::Label-->
        </div>
        <!--end::Info-->
        
        <!--begin::User menu-->
        <div class="me-n2">
          <!--begin::Action-->
          <a
              class="btn btn-icon btn-sm btn-active-color-primary mt-n2"
              data-kt-menu-overflow="true"
              data-kt-menu-placement="bottom-start"
              data-kt-menu-trigger="click"
          
          >
            <KTIcon icon-class="text-muted fs-1" icon-name="setting-2" />
          </a>
          
          <UserMenu :Profile="Profile" />
          <!--end::Action-->
        </div>
        <!--end::User menu-->
      </div>
      <!--end::Section-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::User-->
  
  <!--begin::Aside search-->
  <div class="aside-search py-0">
    <!--    <AsideSearch />-->
  </div>
  <!--end::Aside search-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted, watch} from "vue";
import UserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
import AsideSearch from "@/layouts/main-layout/aside/AsideSearch.vue";
import {GlobalStore} from "@/stores/global";
import {useRouter} from "vue-router";


export default defineComponent({
  name: "kt--aside-toolbar",
  components: {
    UserMenu,
    AsideSearch,
  },
  setup() {
    const {State} = GlobalStore()
    const GetLocalProfile = localStorage.getItem('user')
    const router = useRouter()
    
    const Profile = computed(() => {
      if (Object.keys(State.Profile).length > 0) {
        return State.Profile
      } else if (GetLocalProfile) {
        return GetLocalProfile
      } else {
        // // router.push('sign-in')
      }
    })
    
    return {
      getAssetPath,
      State,
      Profile
    };
  },
});
</script>
