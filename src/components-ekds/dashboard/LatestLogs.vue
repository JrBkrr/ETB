<template>
  <!--begin::List Widget 5-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bold mb-2 text-dark">Son Kayıtlar</span>
        <span class="text-muted fw-semobold fs-7">890,344 Sales</span>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
            type="button"
            class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2"/>
        </button>
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5 scroll-y vh-50 me-n5 pe-5 w-100">
      <!--begin::Timeline-->
      <div class="timeline-label">
        <!--begin::Item-->
        <div v-for="log in State.Logs" :key="`${log.id}`" class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{moment(log.createdAt).format('hh:mm')}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i :class="[log.level === 'INFO' && 'text-warning']" class="fa fa-genderless fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="fw-mormal timeline-content text-muted ps-2">
            {{log.message}}
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </div>
      <!--end::Timeline-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: List Widget 5-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent} from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import {GlobalStore} from "@/stores/global";
import moment from "moment";

export default defineComponent({
  name: "kt-widget-5",
  computed: {
    moment() {
      return moment
    }
  },
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown1,
  },
  setup() {
    const {Action_Start, State} = GlobalStore()
    const test = () => {
      console.log('Run')
    }
    return {
      State,
      test,
      getAssetPath,
    };
  },
});
</script>
