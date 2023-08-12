<template>
  <!--begin::Tables Widget 9-->
  <div :class="widgetClasses" class="card h-100">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Devices</span>
        
        <span class="text-muted mt-1 fw-semobold fs-7">{{ List.length }} Devices</span>
      </h3>
      
      <div class="d-flex align-items-center justify-content-center"
           data-bs-placement="top"
           data-bs-toggle="tooltip"
           data-bs-trigger="hover"
           title="Click to add a user"
      >
        <div class="aside-search py-0 me-5">
          <TableSearch v-model:payload="SearchText" />
        </div>
        <a
            class="btn btn-sm btn-light-primary"
            data-bs-target="#kt_modal_signature_modal"
            data-bs-toggle="modal"
        >
          <KTIcon icon-class="fs-3" icon-name="plus" />
          {{ translate('authenticate') }}
        </a>
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
          <tr class="fw-bold text-muted">
            <th class="w-25px">
              <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input
                    class="form-check-input"
                    type="checkbox"
                    :checked="checkedRows.length === List.length"
                    @change="
                      checkedRows.length === List.length
                        ? (checkedRows.length = 0)
                        : (checkedRows = [...List])
                    "
                />
              </div>
            </th>
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
            <!--            <th class="min-w-100px text-end">Actions</th>-->
          </tr>
          </thead>
          <!--end::Table head-->
          
          <!--begin::Table body-->
          <tbody>
          <template v-for="(item, index) in List" :key="index">
            <tr class="hover-right-5 transition-3ms" @click="Target = item; setRightWindow(true);" @mouseenter="Target = item">
              <td>
                <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input
                      :checked="checkedRows.some(a => a.id === item.id)"
                      @change="toggleChecked(item)"
                      class="form-check-input widget-9-check"
                      type="checkbox"
                  />
                </div>
              </td>
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
              </td>
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ item.operatingSystemVersion }}</a>
              </td>
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ item.details?.find(a => a.name === 'fingerprint_success_rate')?.value || '' }}</a>
              </td>
              
              
              <td>
                <a class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">{{ moment(item.lastOnlineTime).format('YYYY-MM-DD hh:mm:ss') }}</a>
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
              
              
              <!--              <td class="text-end">-->
              <!--                <a-->
              <!--                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"-->
              <!--                    href="#"-->
              <!--                >-->
              <!--                  <KTIcon icon-class="fs-3" icon-name="switch" />-->
              <!--                </a>-->
              <!--                -->
              <!--                <a-->
              <!--                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"-->
              <!--                    href="#"-->
              <!--                >-->
              <!--                  <KTIcon icon-class="fs-3" icon-name="pencil" />-->
              <!--                </a>-->
              <!--                -->
              <!--                <a-->
              <!--                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"-->
              <!--                    href="#"-->
              <!--                >-->
              <!--                  <KTIcon icon-class="fs-3" icon-name="trash" />-->
              <!--                </a>-->
              <!--              </td>-->
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
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import {GlobalStore} from "@/stores/global";
import TableSearch from "@/components-ekds/inputs/TableSearch.vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import moment from "moment";
import Swal from 'sweetalert2'
import RightWindow from "@/components-ekds/modals/RightWindow.vue";
import {useI18n} from "vue-i18n";

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
  name: "signature-table",
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
    const checkedRows = ref<Array<Target>>([]);
    const {State, Action_Start, setRightWindow} = GlobalStore();
    const Target = ref<Target>({} as Target);
    const {t, te} = useI18n();
    
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    
    watch(checkedRows, (NV, OV) => console.log(NV))
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
    
    const toggleChecked = (item) => {
      // item öğesi zaten seçilmiş mi diye kontrol edelim
      const existingIndex = checkedRows.value.findIndex(a => a.id === item.id);
      if (existingIndex !== -1) {
        // Eğer öğe zaten seçiliyse, seçimden çıkar
        checkedRows.value.splice(existingIndex, 1);
      } else {
        // Eğer öğe seçili değilse, seçime ekle
        checkedRows.value.push(item);
      }
      
      console.log(checkedRows.value)
    }
    
    return {
      getAssetPath,
      Target,
      SearchText,
      List,
      RemoveDevice,
      UpdateEvent,
      setRightWindow,
      checkedRows,
      translate,
      toggleChecked
    };
    
  },
});
</script>
