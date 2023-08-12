<template>
  <!--begin::Tables Widget 11-->
  <div :class="widgetClasses" class="card h-100">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Versions</span>
        
        <span class="text-muted mt-1 fw-semobold fs-7"
        >{{ List.length }} products</span
        >
      </h3>
      <!--      <div class="card-toolbar">-->
      <!--        <a  class="btn btn-sm btn-light-primary">-->
      <!--          <KTIcon icon-name="plus" icon-class="fs-2"/>-->
      <!--          New Member-->
      <!--        </a>-->
      <!--      </div>-->
      <div class="d-flex align-items-center justify-content-center">
        <div class="aside-search py-0 me-5">
          <TableSearch v-model:payload="SearchText" />
        </div>
        <div class="card-toolbar">
          <!--begin::Menu-->
          <button
              class="btn btn-sm btn-icon btn-color-primary btn-active-primary border border-primary"
              data-bs-toggle="modal" :data-bs-target="`#${'kt_modal_new_version'}`"
          >
            <KTIcon icon-name="plus" icon-class="fs-3" />
          </button>
          <!--end::Menu-->
        </div>
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
              <span class="text-dots text-muted fw-bold mt-1">Version No</span>
            </th>
            <th class="min-w-125px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Version Name</span>
            </th>
            <th class="min-w-125px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Branch No</span>
            </th>
            <th class="min-w-200px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Hardware Versions</span>
            </th>
            <th class="min-w-150px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Forced Update</span>
            </th>
            <th class="min-w-100 text-end rounded-end"></th>
          </tr>
          </thead>
          <!--end::Table head-->
          
          <!--begin::Table body-->
          <tbody>
          <template v-for="(item, index) in List" :key="index">
            <tr class="hover-right-5 transition-3ms" @mouseenter="Target = item">
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
                    >{{ item.versionNumberSemantic }}</a
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
                >{{ item.name || '-' }}</a
                >
                <span class="text-muted fw-semobold text-muted d-block fs-7"
                >Paid</span
                >
              </td>
              
              <td>
                <a
                    
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                >{{ item.deviceType }}</a
                >
                <span class="text-muted fw-semobold text-muted d-block fs-7"
                >Rejected</span
                >
              </td>
              
              <td>
                <a
                    
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                >{{ item.hardwareVersions[0]?.name }}</a
                >
                <span
                    class="text-muted fw-semobold text-muted d-block fs-7"
                >{{ item.versionNumber }}</span
                >
              </td>
              
              <td>
                  <span
                      :class="`
                      badge badge-light-${item.status?.name}
                      fs-7
                      fw-bold
                    `"
                  >{{ item.forceUpdate ? 'Active' : 'Passive' }}</span
                  >
              </td>
              <td class="d-flex justify-content-end">
                <a
                    @click="setRightWindow(true)"
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
    <RightWindow>
      <div v-if="Object.keys(Target).length > 0" class="p-5">
        <div class="bg-dark bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">name :</span>
          <span class="fw-bold fs-3">{{ Target?.name }}</span>
        </div>
        <div class="bg-dark bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">versionNumberSemantic :</span>
          <span class="fw-bold fs-3">{{ Target?.versionNumberSemantic }}</span>
        </div>
        <div class="bg-dark bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">deviceType :</span>
          <span class="fw-bold fs-3">{{ Target?.deviceType }}</span>
        </div>
        <div class="bg-dark bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">hardwareVersions :</span>
          <span class="fw-bold fs-3">{{ Target?.hardwareVersions[0]?.name }}</span>
        </div>
        <div class="bg-dark bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">versionNumber :</span>
          <span class="fw-bold fs-3">{{ Target?.versionNumber }}</span>
        </div>
        <div class="bg-dark bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">forceUpdate :</span>
          <span class="fw-bold fs-3">{{ Target?.forceUpdate }}</span>
        </div>
      </div>
    </RightWindow>
  </div>
  <!--end::Tables Widget 11-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted, ref} from "vue";
import {GlobalStore} from "@/stores/global";
import TableSearch from "@/components-ekds/inputs/TableSearch.vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import RightWindow from "@/components-ekds/modals/RightWindow.vue";

interface name {
  name: string
}

interface Target {
  id: string;
  versionNumberSemantic: string;
  name: string;
  deviceType: string;
  hardwareVersions: name[];
  versionNumber: string;
  forceUpdate: string;
}

export default defineComponent({
  name: "VersionsTable",
  components: {RightWindow, TableSearch, KTIcon},
  props: {
    widgetClasses: String,
  },
  setup() {
    const {State, Action_Start, setRightWindow} = GlobalStore();
    const Target = ref<Target>({} as Target);
    
    // Get List
    onMounted(async () => {
      await Action_Start('get', 'versions', 'Versions')
    });
    
    // Filter List
    const SearchText = ref<string>('');
    const List = computed(() => {
      return State.Versions.filter(item => item.versionNumber.toString().includes(SearchText.value));
    });
    
    return {
      setRightWindow,
      getAssetPath,
      Target,
      SearchText,
      List,
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