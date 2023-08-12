<template>
  <!--begin::Tables Widget 11-->
  <div :class="widgetClasses" class="card h-100">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Logs</span>
        
        <span class="text-muted mt-1 fw-semobold fs-7"
        >{{ List.length }} products</span
        >
      </h3>
      <div class="d-flex align-items-center justify-content-center">
        <div class="aside-search py-0">
          <TableSearch v-model:payload="SearchText" />
        </div>
        <!--        <div class="card-toolbar">-->
        <!--          &lt;!&ndash;begin::Menu&ndash;&gt;-->
        <!--          <button-->
        <!--              class="btn btn-sm btn-icon btn-color-primary btn-active-primary border border-primary"-->
        <!--              data-bs-toggle="modal" :data-bs-target="`#${'kt_modal_mew_device'}`"-->
        <!--          >-->
        <!--            <KTIcon icon-name="plus" icon-class="fs-3"/>-->
        <!--          </button>-->
        <!--          &lt;!&ndash;end::Menu&ndash;&gt;-->
        <!--        </div>-->
      </div>
    </div>
    <!--end::Header-->
    
    <!--begin::Body-->
    <div class="card-body py-3 h-100">
      <!--begin::Table container-->
      <div class="table-responsive h-100 pb-15">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
          <tr class="bg-light">
            <th class="ps-4 rounded-start">
              <span class="text-dots text-muted fw-bold mt-1">#</span>
            </th>
            <th class="min-w-125px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Device Serial No</span>
            </th>
            <th class="min-w-125px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Level</span>
            </th>
            <th class="min-w-125px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Message</span>
            </th>
            <th class="min-w-200px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Description</span>
            </th>
            <th class="min-w-200px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Time</span>
            </th>
            <th class="min-w-100 text-end rounded-end"></th>
          </tr>
          </thead>
          <!--end::Table head-->
          
          <!--begin::Table body-->
          <tbody>
          <template v-for="(item, index) in List" :key="index">
            <tr class="hover-right-5 transition-3ms" @click="Target = item; setRightWindow(true);" @mouseenter="Target = item">
              <td>
                <div class="d-flex align-items-center">
                  <div class="symbol symbol-50px me-5">
                    <a
                        class="symbol-label me-1 fs-2 fw-bold"
                        :class="`bg-light-dark btn-active-color-${Target.id === item.id && 'primary'} text-${Target.id === item.id ? 'primary': 'dark'}`"
                    >
                      {{ index + 1 }}
                    </a>
                  </div>
                </div>
              </td>
              
              <td>
                <div class="d-flex align-items-center">
                  <div class="d-flex justify-content-start flex-column">
                    <a
                        class="text-dark text-hover-primary fw-bold mb-1 fs-6"
                    >{{ item.device?.serialNumber }}</a
                    >
                    <!--                    <span-->
                    <!--                        class="text-muted fw-semobold text-muted d-block fs-7"-->
                    <!--                    >{{ item.gemNumber }}</span-->
                    <!--                    >-->
                  </div>
                </div>
              </td>
              
              <td>
                <a
                    
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                >{{ item.level || '-' }}</a
                >
                <span class="text-muted fw-semobold text-muted d-block fs-7"
                >Paid</span
                >
              </td>
              
              <td>
                <a
                    
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                >{{ item.exceptionMessage }}</a
                >
              </td>
              
              <td>
                <a
                    
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                >{{ item.message }}</a
                >
              </td>
              
              <td>
                <a
                    
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                >{{ moment(item.createdAt).format('YYYY-MM-DD') }}</a>
                <span
                    class="text-muted fw-semobold text-muted d-block fs-7"
                >{{ moment(item.createdAt).format('hh:mm:ss') }}</span
                >
              </td>
              
              <td class="d-flex justify-content-end">
                <a
                    
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                >
                  <KTIcon icon-name="switch" icon-class="fs-3" />
                </a>
              
              </td>
            </tr>
          </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  
  </div>
  <!--end::Tables Widget 11-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted, ref} from "vue";
import {GlobalStore} from "@/stores/global";
import TableSearch from "@/components-ekds/inputs/TableSearch.vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";

interface Target {
  id: string
}

import ApiService from "@/core/services/ApiService";
import moment from "moment";

export default defineComponent({
  name: "LogsTable",
  computed: {
    moment() {
      return moment
    }
  },
  components: {TableSearch, KTIcon},
  props: {
    widgetClasses: String,
  },
  setup() {
    const {State, Action_Start, setRightWindow} = GlobalStore();
    const Target = ref<Target>({} as Target);
    
    // Get List
    onMounted(async () => {
      const queryParams = {
        createdAtFromDateTime: '2021-06-24',
        createdAtToDateTime: '2023-09-24',
      };
      
      await Action_Start('query', 'logs', 'Logs', '', queryParams)
    });
    
    // Filter List
    const SearchText = ref<string>('');
    const List = computed(() => {
      return State.Logs
    });
    
    return {
      getAssetPath,
      Target,
      SearchText,
      List,
      setRightWindow
    };
  }
});
</script>
<style>
.text-dots {
  white-space:   nowrap;
  overflow:      hidden;
  text-overflow: ellipsis;
  width:         90% !important;
  display:       inline-block;
  }
</style>