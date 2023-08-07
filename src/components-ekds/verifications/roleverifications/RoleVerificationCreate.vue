<template>
  <div
      id="kt_modal_mew_role"
      ref="newTargetModalRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content rounded">
        <div class="modal-header pb-0 border-0 justify-content-end">
          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <KTIcon icon-class="fs-1" icon-name="cross" />
          </div>
        </div>
        
        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <el-form
              id="kt_modal_new_target_form"
              ref="formRef"
              :model="targetData"
              :rules="rules"
              class="form"
              @submit.prevent="submit()"
          >
            <div class="mb-13 text-center">
              <h1 class="mb-3">Create New Verification</h1>
            </div>
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Device</span>
              </label>
              <el-form-item prop="hardwareVersion">
                <el-select
                    v-model="targetData.device.serialNumber"
                    as="select"
                    name="device"
                    placeholder="device"
                >
                  <el-option value="">Select type...</el-option>
                  <el-option v-for="device in State.Devices" :key="`device-${device.id}`" :label="device.serialNumber" :value="device.serialNumber">
                    {{ device.serialNumber }}
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Requested Fields</span>
              </label>
              
              <el-form-item prop="hardwareVersions">
                <el-select
                    v-model="targetData.requestedFields"
                    :value-key="'name'"
                    allow-create
                    default-first-option
                    filterable
                    multiple
                    placeholder="Choose tags for your target"
                >
                  <el-option v-for="(field,index) in requestedFields" :label="field" :value="index + 1"></el-option>
                </el-select>
              </el-form-item>
            </div>
            
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Card Slot</span>
              </label>
              <el-form-item prop="cardSlot">
                <el-select
                    v-model="targetData.cardSlot"
                    as="select"
                    name="cardSlot"
                    placeholder="cardSlot"
                >
                  <el-option value="">Select type...</el-option>
                  <el-option label="Hizmet İsteyen" value="0">
                    Hizmet İsteyen
                  </el-option>
                  <el-option label="Hizmete Katılan" value="1">
                    Hizmete Katılan
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-stack mb-8">
              <!--begin::Label-->
              <div class="me-5">
                <label class="fs-6 fw-semobold">Cert With Pin</label>
              </div>
              <!--end::Label-->
              
              <!--begin::Switch-->
              <label
                  class="form-check form-switch form-check-custom form-check-solid"
              >
                <input
                    id="update-ussss"
                    v-model="targetData.certWithPin"
                    class="form-check-input"
                    type="checkbox"
                />
                <span class="form-check-label fw-semobold text-gray-400">
                  Allowed
                </span>
              </label>
              <!--end::Switch-->
            </div>
            
            <div class="d-flex flex-stack mb-8">
              <!--begin::Label-->
              <div class="me-5">
                <label class="fs-6 fw-semobold">Write Mode</label>
              </div>
              <!--end::Label-->
              
              <!--begin::Switch-->
              <label
                  class="form-check form-switch form-check-custom form-check-solid"
              >
                <input
                    id="update-ussss"
                    v-model="targetData.writeMode"
                    class="form-check-input"
                    type="checkbox"
                />
                <span class="form-check-label fw-semobold text-gray-400">
                  Allowed
                </span>
              </label>
              <!--end::Switch-->
            </div>
            
            <div class="text-center">
              <button
                  id="kt_modal_new_target_cancel"
                  class="btn btn-light me-3"
                  type="reset"
              >
                Cancel
              </button>
              
              
              <button
                  :data-kt-indicator="loading ? 'on' : null"
                  class="btn btn-lg btn-primary"
                  type="submit"
              >
                <span v-if="!loading" class="indicator-label">
                  Submit
                  <KTIcon icon-class="fs-3 ms-2 me-0" icon-name="arrow-right" />
                </span>
                <span v-if="loading" class="indicator-progress">
                  Please wait...
                  <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, onMounted, ref} from "vue";
import {hideModal} from "@/core/helpers/dom";
import Swal from "sweetalert2";
import {GlobalStore} from "@/stores/global";
import {useI18n} from "vue-i18n";

interface payload {
  "certWithPin": boolean,
  "device": {
    "serialNumber": string
  },
  "cardSlot": string,
  "requestedFields": number[],
  //GET SELECTABLE SERVISINDEN GELENLER // Index + 1 i servise göndereceğiz
  //MOTHER_FATHER_NAME  (1),
  //BIRTH_PLACE (2),
  //BIRTH_DATE (3),
  //CINSIYET (4),
  //MEDENI_HAL (5),
  //ESKI_SOYISIM (6),
  //DINI (7),
  //VERILIS_TARIHI (8),
  //SERIAL_NUMBER (9),
  //MRZ (10),
  //PERSONEL_MESSAGE (11),
  //RUST (12),
  //PICTURE (13),
  //TC (14),
  //NAME_LASTNAME (15),
  //KAN_GRUBU (16)
  "certType": number, // Bu sonra konuşulacak
  "writeMode": boolean
}

export default defineComponent({
  name: "new-target-modal",
  components: {},
  setup() {
    const {t, te} = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const {Action_Start, State} = GlobalStore()
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const requestedFields = ref([])
    
    onMounted(() => {
      Action_Start('get', 'role-verifications/selectableRoleFields', '').then(Response => requestedFields.value = Response)
    })
    const targetData = ref<payload>({
      certWithPin: false,
      device: {
        serialNumber: "0005",
      },
      cardSlot: "0",
      requestedFields: [],
      certType: 0,
      writeMode: false
    });
    
    const rules = ref({
      certWithPin: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      device: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      cardSlot: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      requestedFields: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      certType: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      writeMode: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
    });
    
    const submit = () => {
      if (!formRef.value) {
        return;
      }
      
      formRef.value.validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true;
          await Action_Start('post', 'role-verifications', '', targetData.value).then(async Response => {
            setTimeout(() => {
              State.Notifications.push({
                head: 'İşlem Başarılı',
                title: `${translate('serialNumber')}: ${targetData.value.device.serialNumber}`,
                variant: 'success',
                status: false
              })
              loading.value = false;
              hideModal(newTargetModalRef.value);
            }, 2000);
            await Action_Start('get', 'role-verifications', 'RoleVerifications')
          }).catch(async Error => {
            console.log(Error)
            loading.value = false;
            await Action_Start('get', 'role-verifications', 'RoleVerifications')
          })
        } else {
          return false;
        }
        
      });
    };
    
    return {
      requestedFields,
      targetData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
      getAssetPath,
      State
    };
  },
});
</script>

<style lang="scss">
.override-styles {
  z-index: 99999 !important;
  pointer-events: initial;
}
</style>
