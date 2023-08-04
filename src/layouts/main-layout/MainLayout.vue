<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside
        v-if="asideEnabled"
        :lightLogo="themeLightLogo"
        :darkLogo="themeDarkLogo"
    />
    <!-- end:: Aside Left -->

    <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper vh-100">
      <KTHeader/>
      <!-- begin:: Content -->
      <div id="kt_content" class="content flex-grow-1">
        <!-- begin:: Content Body -->
        <div class="post d-flex flex-column-fluid h-100">
          <div
              id="kt_content_container"
              class="h-100"
              :class="{
              'container-fluid': contentWidthFluid,
              'container-xxl': !contentWidthFluid,
            }"
          >
            <router-view/>
          </div>
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter/>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop/>
  <KTDrawerMessenger/>
  <KTActivivityDrawer/>
  <KTCreateApp/>
  <KTInviteFriendsModal/>

  <KTToolButtons/>
  <KTHelpDrawer/>
  <ETBLoading/>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import {useRoute} from "vue-router";
import KTAside from "@/layouts/main-layout/aside/Aside.vue";
import KTHeader from "@/layouts/main-layout/header/Header.vue";
import KTFooter from "@/layouts/main-layout/footer/Footer.vue";
import KTScrollTop from "@/layouts/main-layout/extras/ScrollTop.vue";
import KTActivivityDrawer from "@/layouts/main-layout/drawers/ActivityDrawer.vue";
import KTCreateApp from "@/components/modals/wizards/create-app-modal/CreateAppModal.vue";
import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import KTHelpDrawer from "@/layouts/main-layout/extras/HelpDrawer.vue";
import KTToolButtons from "@/layouts/main-layout/extras/ToolButtons.vue";
import KTDrawerMessenger from "@/layouts/main-layout/extras/MessengerDrawer.vue";
import {reinitializeComponents} from "@/core/plugins/keenthemes";
import {
  asideEnabled,
  contentWidthFluid,
  loaderEnabled,
  loaderLogo,
  subheaderDisplay,
  themeDarkLogo,
  themeLightLogo,
  toolbarDisplay,
} from "@/core/helpers/config";
import LayoutService from "@/core/services/LayoutService";
import ETBLoading from "@/layouts/main-layout/extras/Loading.vue";
import RightWindow from "@/components-ekds/modals/RightWindow.vue";

export default defineComponent({
  name: "master-layout",
  components: {
    RightWindow,
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTCreateApp,
    KTInviteFriendsModal,
    KTActivivityDrawer,
    KTHelpDrawer,
    KTToolButtons,
    KTDrawerMessenger,
    ETBLoading
  },
  setup() {
    const route = useRoute();

    onBeforeMount(() => {
      LayoutService.init();
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    watch(
        () => route.path,
        () => {
          nextTick(() => {
            reinitializeComponents();
          });
        }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>