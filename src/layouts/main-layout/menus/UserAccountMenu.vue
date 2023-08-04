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
              class="d-inline-block w-100 h-100 text-white px-5 py-3 text-hover-primary cursor-pointer">{{
              (Profile?.username ?? "-")[0].toUpperCase()
            }}</span>
          <!--          <img alt="Logo" :src="getAssetPath('media/avatars/300-1.jpg')"/>-->
        </div>
        <!--end::Avatar-->

        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bold d-flex align-items-center fs-5">
            {{ `${(Profile?.name ?? "-")} ${(Profile?.surname ?? "-")} ` }}
            <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2"
            >Pro</span
            >
          </div>
          <a href="#" class="fw-semobold text-muted text-hover-primary fs-7"
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
      <router-link to="/my-profile" class="menu-link px-5">
        {{ translate('myProfile') }}
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="d-none menu-item px-5">
      <router-link to="/crafted/pages/profile/overview" class="menu-link px-5">
        <span class="menu-text">{{ translate('myProject') }}</span>
        <span class="menu-badge">
          <span class="badge badge-light-danger badge-circle fw-bold fs-7"
          >3</span
          >
        </span>
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div
        class="d-none menu-item px-5"
        data-kt-menu-trigger="hover"
        data-kt-menu-placement="left-start"
        data-kt-menu-flip="center, top"
    >
      <router-link to="/crafted/pages/profile/overview" class="menu-link px-5">
        <span class="menu-title">My Subscription</span>
        <span class="menu-arrow"></span>
      </router-link>

      <!--begin::Menu sub-->
      <div class="d-none menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/crafted/pages/profile/overview" class="menu-link px-5">
            Referrals
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/crafted/pages/profile/overview" class="menu-link px-5">
            Billing
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/crafted/pages/profile/overview" class="menu-link px-5">
            Payments
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link
              to="/crafted/pages/profile/overview"
              class="menu-link d-flex flex-stack px-5"
          >
            Statements

            <i
                class="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="View your statements"
            ></i>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu separator-->
        <div class="separator my-2"></div>
        <!--end::Menu separator-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <div class="menu-content px-3">
            <label
                class="form-check form-switch form-check-custom form-check-solid"
            >
              <input
                  class="form-check-input w-30px h-20px"
                  type="checkbox"
                  value="1"
                  checked
                  name="notifications"
              />
              <span class="form-check-label text-muted fs-7">
                Notifications
              </span>
            </label>
          </div>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="d-none menu-item px-5">
      <router-link to="/crafted/pages/profile/overview" class="menu-link px-5">
        My Statements
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5 my-1">
      <router-link to="/my-profile" class="menu-link px-5">
        {{ translate('accountSettings') }}
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a @click="signOut()" class="menu-link px-5">{{ translate('signOut') }}</a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent} from "vue";
import {useI18n} from "vue-i18n";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  name: "kt-user-menu",
  components: {},

  setup() {
    const {State} = GlobalStore()
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
        router.push('sign-in')
      }
    })

    i18n.locale.value = localStorage.getItem("lang")
        ? (localStorage.getItem("lang") as string)
        : "tr";

    const signOut = () => {
      store.logout();
      router.push({name: "sign-in"});
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

<style scoped>
.z-999{
  z-index: 999 !important;
}
</style>
