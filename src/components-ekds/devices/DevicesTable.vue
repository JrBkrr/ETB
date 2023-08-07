<template>
  <!--begin::Tables Widget 11-->
  <div :class="widgetClasses" class="card h-100">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Devices</span>
        
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
              :data-bs-target="`#${'kt_modal_new_device'}`"
              class="btn btn-sm btn-icon btn-color-primary btn-active-primary border border-primary" data-bs-toggle="modal"
          >
            <KTIcon icon-class="fs-3" icon-name="plus" />
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
              <span class="text-dots text-muted fw-bold mt-1">Gem No</span>
            </th>
            <th class="min-w-125px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Series No</span>
            </th>
            <th class="min-w-125px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Version</span>
            </th>
            <th class="min-w-200px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Operating System version</span>
            </th>
            <th class="min-w-150px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Fingerprint Success Rate</span>
            </th>
            <th class="min-w-150px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Last Online Time</span>
            </th>
            <th class="min-w-150px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Update</span>
            </th>
            <th class="min-w-150px" style="max-width: 10%">
              <span class="text-dots text-muted fw-bold mt-1">Status</span>
            </th>
            <th class="min-w-150px text-end rounded-end"></th>
          </tr>
          </thead>
          <!--end::Table head-->
          
          <!--begin::Table body-->
          <tbody>
          <template v-for="(item, index) in List" :key="index">
            <tr class="hover-up-5 transition-3ms" @click="Target = item; setRightWindow(true);" @mouseenter="Target = item">
              <td>
                <div class="d-flex align-items-center rounded-start-5">
                  <div class="symbol symbol-50px me-5">
                    <a :class="`bg-light-dark btn-active-color-${Target.id === item.id && 'primary'} text-${Target.id === item.id ? 'primary': 'dark'}`"
                       class="symbol-label me-1 fs-2 fw-bold">
                      {{ index + 1 }}
                    </a>
                  </div>
                </div>
              </td>
              
              <td>
                <div class="d-flex align-items-center">
                  <div class="d-flex justify-content-start flex-column">
                    <a class="text-dark text-hover-primary fw-bold mb-1 fs-6">{{ item.gemNumber }}</a>
                  </div>
                </div>
              </td>
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ item.serialNumber || '-' }}</a>
              </td>
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ item.version?.versionNumberSemantic }}</a>
                <span class="text-muted fw-semobold text-muted d-block fs-7"
                >Rejected</span
                >
              </td>
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ item.operatingSystemVersion }}</a>
                <span class="text-muted fw-semobold text-muted d-block fs-7">{{ item.hardwareVersion?.name }}</span>
              </td>
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ item.details.find(a => a.name === 'fingerprint_success_rate')?.value || '' }}</a>
              </td>
              
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ moment(item.lastOnlineTime).format('YYYY-MM-DD') }}</a>
                <span
                    class="text-muted fw-semobold text-muted d-block fs-7"
                >{{ moment(item.lastOnlineTime).format('hh:mm:ss') }}</span
                >
              </td>
              <td>
                  <span :class="`badge badge-light-${!item.version.forceUpdate ? 'primary' : 'success'}fs-7fw-bold`">
                    {{ item.version.forceUpdate ? 'Active' : 'Passive' }}
                  </span>
              </td>
              
              <td>
                  <span :class="`badge badge-light-${!item.online ? 'primary' : 'success'}fs-7fw-bold`">
                    {{ item.online ? 'Online' : 'Offline' }}
                  </span>
              </td>
              
              <td class="d-flex justify-content-center">
                <a
                    :data-bs-target="`#${'kt_modal_update_device'}`"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" data-bs-toggle="modal"
                    @click.stop="UpdateEvent(item)"
                >
                  <KTIcon icon-class="fs-3" icon-name="pencil" />
                </a>
                
                <a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm" @click.stop="RemoveDevice(item.serialNumber)">
                  <KTIcon icon-class="fs-3" icon-name="trash" />
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
        <h1 class="mb-6 display-6">{{ Target.serialNumber }}</h1>
        <div class="bg-success bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">gemNumber :</span>
          <span class="fw-bold fs-3">{{ Target?.gemNumber }}</span>
        </div>
        <div class="bg-success bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">versionNumberSemantic :</span>
          <span class="fw-bold fs-3">{{ Target?.versionNumberSemantic }}</span>
        </div>
        <div class="bg-success bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">operatingSystemVersion :</span>
          <span class="fw-bold fs-3">{{ Target?.operatingSystemVersion }}</span>
        </div>
        <div class="bg-success bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">hardwareVersion :</span>
          <span class="fw-bold fs-3">{{ Target?.hardwareVersion?.name }}</span>
        </div>
        <div class="bg-success bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">createdAt :</span>
          <span class="fw-bold fs-3">{{ Target?.createdAt }}</span>
        </div>
        <div class="bg-success bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">forceUpdate :</span>
          <span class="fw-bold fs-3">{{ Target?.forceUpdate }}</span>
        </div>
        <div class="bg-success bg-opacity-25 rounded p-2 mb-5">
          <span class="fw-semibold fs-5 me-2">online :</span>
          <span class="fw-bold fs-3">{{ Target?.online }}</span>
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
import moment from "moment";
import Swal from 'sweetalert2'
import RightWindow from "@/components-ekds/modals/RightWindow.vue";

interface Target {
  id: string;
  serialNumber: string;
  gemNumber?: string;
  versionNumberSemantic?: string;
  operatingSystemVersion?: string;
  hardwareVersion?: {
    name: string;
  };
  createdAt?: string;
  forceUpdate?: boolean;
  online?: boolean;
}

export default defineComponent({
  name: "DevicesTable",
  computed: {
    moment() {
      return moment
    }
  },
  components: {RightWindow, TableSearch, KTIcon},
  props: {
    widgetClasses: String,
    item: Object
  },
  setup(props, {emit}) {
    const {State, Action_Start, setRightWindow} = GlobalStore();
    const Target = ref<Target>({} as Target);
    
    // Get List
    onMounted(async () => {
      await Action_Start('get', 'devices', 'Devices')
      await Action_Start('get', 'hardwareVersions', 'HardwareVersions')
    });
    
    // Filter List
    const SearchText = ref<string>('');
    const List = computed(() => {
      return State.Devices.filter(item => item.serialNumber.includes(SearchText.value));
    });
    
    const RemoveDevice = (serialNumber) => {
      Swal.fire({
        text: `Are you sure you want to delete the device with serial number ${serialNumber}?`,
        icon: "warning",
        buttonsStyling: false,
        confirmButtonText: "Yes, I am sure!",
        denyButtonText: 'Cancel',
        showDenyButton: true,
        heightAuto: false,
        customClass: {
          confirmButton: "btn btn-primary",
          denyButton: "btn btn-secondary",
        },
      }).then(async Result => {
        // `result.isConfirmed` true olacaksa Onay (Confirm) butonuna basıldı,
        // `result.isDenied` true olacaksa Reddet (Deny) butonuna basıldı,
        // `result.isDismissed` true olacaksa Popup kapatıldı veya dışarı tıklandı veya ESC tuşuna basıldı.
        if (Result.isConfirmed) {
          // Onay butonuna basıldığında yapılacak işlemler buraya yazılır
          await Action_Start('delete', `devices/delete?serialNumber=${serialNumber}`, '')
          await Action_Start('get', 'devices', 'Devices')
        } else if (Result.isDenied) {
          // Reddet butonuna basıldığında yapılacak işlemler buraya yazılır
          console.log("Reddedildi");
        }
      })
    }
    const UpdateEvent = (item) => {
      emit("update:item", item);
    }
    
    return {
      getAssetPath,
      Target,
      SearchText,
      List,
      RemoveDevice,
      UpdateEvent,
      setRightWindow
    };
  }
});
</script>