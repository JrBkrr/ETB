<template>
  <!--begin::Tables Widget 11-->
  <div :class="widgetClasses" class="card h-100">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Settings Templates</span>
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
              :data-bs-target="`#${'kt_modal_new_setting_temp'}`"
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
            <th class="ps-4 rounded-start" style="width: 20px;">
              <span class="text-dots text-muted fw-bold mt-1">#</span>
            </th>
            <th class="min-w-125px">
              <span class="text-dots text-muted fw-bold mt-1">Name</span>
            </th>
            <th class="min-w-125px">
              <span class="text-dots text-muted fw-bold mt-1">Description</span>
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
                <div class="d-flex align-items-center rounded-start-5">
                  <div class="symbol symbol-50px me-5">
                    <a
                        :class="`bg-light-dark btn-active-color-${Target.id === item.id && 'primary'} text-${Target.id === item.id ? 'primary': 'dark'}`"
                        class="symbol-label me-1 fs-2 fw-bold"
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
                    >{{ item.name }}</a
                    >
                  </div>
                </div>
              </td>
              
              <td>
                <div class="d-flex align-items-center">
                  <div class="d-flex justify-content-start flex-column">
                    <a
                        class="text-dark text-hover-primary fw-bold mb-1 fs-6"
                    >{{ item.description }}</a
                    >
                  </div>
                </div>
              </td>
              
              <td class="d-flex justify-content-end">
                <a
                    :data-bs-target="`#${'kt_modal_update_device'}`"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" data-bs-toggle="modal"
                    @click="UpdateEvent(item)"
                >
                  <KTIcon icon-class="fs-3" icon-name="pencil" />
                </a>
                
                <a
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    @click="RemoveDevice(item.id)"
                >
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
import Swal from "sweetalert2";
import RightWindow from "@/components-ekds/modals/RightWindow.vue";

interface Target {
  id: string;
  name: string;
}

export default defineComponent({
  name: "SettingsTable",
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
    const {State, Action_Start} = GlobalStore();
    const Target = ref<Target>({} as Target);
    
    // Get List
    onMounted(async () => {
      await Action_Start('get', 'settings-templates', 'SeTemplates')
    });
    
    // Filter List
    const SearchText = ref<string>('');
    const List = computed(() => {
      return State.SeTemplates
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
    };
  }
});
</script>
<style>
* {
  transition: background-color .2s;
  }

.text-dots {
  white-space:   nowrap;
  overflow:      hidden;
  text-overflow: ellipsis;
  width:         90% !important;
  display:       inline-block;
  }
</style>