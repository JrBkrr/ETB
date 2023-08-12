<template>
  <div class="overflow-auto px-10 h-100">
    <!--begin::Navbar-->
    <div class="card mb-5 mb-xl-10">
      <div class="card-body pt-9 pb-0">
        <!--begin::Details-->
        <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
          <!--begin: Pic-->
          <div class="me-7 mb-4">
            <div
                class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
            >
              <p class="bg-light rounded d-flex align-items-center justify-content-center display-1 h-200px w-200px">
                {{ (Profile?.username ?? '-')[0].toUpperCase() }}</p>
              <div
                  class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
              ></div>
            </div>
          </div>
          <!--end::Pic-->
          
          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div
                class="d-flex justify-content-between align-items-start flex-wrap mb-2"
            >
              <!--begin::User-->
              <div class="d-flex flex-column">
                <!--begin::Name-->
                <div class="d-flex align-items-center mb-2">
                  <a
                      class="text-gray-800 text-hover-primary fs-2 fw-bold me-1"
                  >{{ `${(Profile?.name ?? "-")} ${(Profile?.surname ?? "-")}` }}</a
                  >
                  <a>
                    <KTIcon v-if="Profile.enabled" icon-class="fs-1 text-primary" icon-name="verify" />
                    <KTIcon v-if="!Profile.enabled" icon-class="fs-1 text-warning" icon-name="information" />
                  </a>
                
                </div>
                <!--end::Name-->
                
                <!--begin::Info-->
                <div class="d-flex flex-wrap fw-semobold fs-6 mb-4 pe-2">
                  <a
                      
                      class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                  >
                    <KTIcon icon-class="fs-4 me-1" icon-name="profile-circle" />
                    <!--                    {{ (Profile?.authorities[0]?.name || '-') }}-->
                  </a>
                  <a
                      
                      class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                  >
                    <KTIcon icon-class="fs-4 me-1" icon-name="geolocation" />
                    İstanbul, Turkey
                  </a>
                  <a
                      
                      class="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                  >
                    <KTIcon icon-class="fs-4 me-1" icon-name="sms" />
                    {{ (Profile?.email || '-') }}
                  </a>
                </div>
                <!--end::Info-->
              </div>
              <!--end::User-->
            </div>
            <!--end::Title-->
            
            <!--begin::Stats-->
            <div class="d-flex flex-wrap flex-xxl-nowrap">
              <!--begin::Wrapper-->
              <!--begin::Stats-->
              <div class="d-flex">
                <div class="col d-inline-flex flex-wrap">
                  <div v-for="auth in RoleList" :key="`${auth.name}`" class="col-4 col-md-3 d-flex align-items-center  pb-2">
                    <span class="d-flex align-items-center justify-content-center bg-light rounded p-2 me-2">
                       <KTIcon :icon-class="`fs-1 ${Profile.authorities?.some(a => a.id === auth.id) ? 'text-primary' : 'text-gray'}`"
                               :icon-name="RoleIcon(auth.id).icon" />
                    </span>
                    <span>{{ RoleIcon(auth.id).name }}</span>
                  </div>
                </div>
              </div>
              <!--end::Stats-->
              <!--end::Wrapper-->
              
              <!--begin::Progress-->
              <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-semobold fs-6 text-gray-400"
                >Profile Compleation</span
                >
                  <span class="fw-bold fs-6">{{ 100 - EmptyValueCount * 10 }}</span>
                </div>
                
                <div class="h-5px mx-3 w-100 bg-light mb-3">
                  <div
                      :style="`width: ${100 - EmptyValueCount * 10}%`"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="0"
                      class="bg-success rounded h-5px"
                      role="progressbar"
                  ></div>
                </div>
              </div>
              <!--end::Progress-->
            </div>
            <!--end::Stats-->
          </div>
          <!--end::Info-->
        </div>
        <!--end::Details-->
        
        <!--begin::Navs-->
        <div class="d-flex overflow-auto h-55px">
          <ul
              class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
          >
            <!--begin::Nav item-->
            <li class="nav-item">
              <a
                  :class="[!Settings && 'active']"
                  class="nav-link text-active-primary me-6 cursor-pointer"
                  @click="Settings = false"
              >
                Overview
              </a>
            </li>
            <!--end::Nav item-->
            <!--begin::Nav item-->
            <li class="nav-item">
              <a
                  :class="[Settings && 'active']"
                  class="nav-link text-active-primary me-6 cursor-pointer"
                  @click="Settings = true"
              >
                Settings
              </a>
            </li>
            <!--end::Nav item-->
          </ul>
        </div>
        <!--begin::Navs-->
      </div>
    </div>
    <!--end::Navbar-->
    <Settings v-if="Settings" />
    <Overview v-else v-model:Settings="Settings" />
  </div>
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import Settings from "@/components-ekds/profile/Settings.vue";
import Overview from "@/components-ekds/profile/Overview.vue";
import {GlobalStore} from "@/stores/global";
import router from "@/router";

export default defineComponent({
  name: "kt-account",
  components: {
    Dropdown3,
    Settings,
    Overview
  },
  setup() {
    const {State} = GlobalStore()
    const Settings = ref(false)
    
    const Profile = computed(() => {
      return State.Profile
    })
    
    const RoleList = [
      {
        "id": "ROLE_ADMIN",
        "name": "ROLE_ADMIN",
        "authority": "ROLE_ADMIN"
      },
      {
        "id": "ROLE_DEVELOPER",
        "name": "ROLE_DEVELOPER",
        "authority": "ROLE_DEVELOPER"
      },
      {
        "id": "ROLE_DEVICE",
        "name": "ROLE_DEVICE",
        "authority": "ROLE_DEVICE"
      },
      {
        "id": "ROLE_I18N",
        "name": "ROLE_I18N",
        "authority": "ROLE_I18N"
      },
      {
        "id": "ROLE_LOG",
        "name": "ROLE_LOG",
        "authority": "ROLE_LOG"
      },
      {
        "id": "ROLE_SETTING",
        "name": "ROLE_SETTING",
        "authority": "ROLE_SETTING"
      },
      {
        "id": "ROLE_USER",
        "name": "ROLE_USER",
        "authority": "ROLE_USER"
      },
      {
        "id": "ROLE_VERIFICATION",
        "name": "ROLE_VERIFICATION",
        "authority": "ROLE_VERIFICATION"
      },
      {
        "id": "ROLE_VERSION",
        "name": "ROLE_VERSION",
        "authority": "ROLE_VERSION"
      },
      {
        "id": "USER_READ",
        "name": "USER_READ",
        "authority": "USER_READ"
      },
      {
        "id": "USER_WRITE",
        "name": "USER_WRITE",
        "authority": "USER_WRITE"
      }
    ]
    const RoleIcon = (role) => {
      switch (role) {
        case "ROLE_ADMIN":
          return {name: 'admin', icon: "abstract-22"};
        case "ROLE_DEVELOPER":
          return {name: 'developer', icon: "android"};
        case "ROLE_DEVICE":
          return {name: 'device', icon: "monitor-mobile"};
        case "ROLE_I18N":
          return {name: 'language', icon: "text-italic"};
        case "ROLE_LOG":
          return {name: 'log', icon: "scroll"};
        case "ROLE_SETTING":
          return {name: 'setting', icon: "setting-3"};
        case "ROLE_USER":
          return {name: 'user', icon: "user"};
        case "ROLE_VERIFICATION":
          return {name: 'verification', icon: "verify"};
        case "ROLE_VERSION":
          return {name: 'version', icon: "data"};
        case "USER_READ":
          return {name: 'read', icon: "text-align-left"};
        case "USER_WRITE":
          return {name: 'write', icon: "pencil"};
        default:
          return {name: 'default', icon: "DEFAULT_ICON"};
      }
    };
    
    let EmptyValueCount = ref(0);
    
    const ProgressCalculate = () => {
      EmptyValueCount.value = 0
      Object.keys(State.Profile).map(key => {
        if (key !== 'password' && key !== 'passwordRepeat' && !State.Profile[key]) EmptyValueCount.value += 1
      })
    }
    
    onMounted(() => {
      ProgressCalculate()
    })
    
    watch(Profile, (NV, OV) => {
      ProgressCalculate()
    })
    
    return {
      Settings,
      getAssetPath,
      Profile,
      RoleIcon,
      RoleList,
      EmptyValueCount
    };
  },
});
</script>
