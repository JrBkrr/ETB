<template>
  <div
      id="kt_modal_mew_verification"
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
                <span class="required">Device</span>
              </label>
              <el-form-item prop="hardwareVersion">
                <el-select
                    v-model="targetData.appLabel"
                    as="select"
                    name="hardwareVersion"
                    placeholder="hardwareVersionName"
                >
                  <el-option value="">Select type...</el-option>
                  <el-option label="Sertifika ile doğrulama" value="3">
                    Sertifika ile doğrulama
                  </el-option>
                  <el-option label="Fotoğ ile doğrulama" value="4">
                    Fotoğ ile doğrulama
                  </el-option>
                  <el-option label="Biometri ile doğrulama" value="5">
                    Biometri ile doğrulama
                  </el-option>
                  <el-option label="Biometri ve Fotoğraf ile doğrulama" value="6">
                    Biometri ve Fotoğraf ile doğrulama
                  </el-option>
                  <el-option label="PIN ile doğrulama" value="8">
                    PIN ile doğrulama
                  </el-option>
                  <el-option label="PIN+Foto" value="9">
                    PIN+Foto
                  </el-option>
                  <el-option label="PIN ve Biometri ile doğrulama" value="10">
                    PIN ve Biometri ile doğrulama
                  </el-option>
                  <el-option label="PIN+Bio+Foto" value="11">
                    PIN+Bio+Foto
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">{{ translate('cardSlot') }}</span>
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
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">nonce</span>
              </label>
              
              <el-form-item prop="nonce">
                <el-input
                    v-model="targetData.nonce"
                    name="nonce"
                    placeholder="nonce"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">message</span>
              </label>
              <el-form-item prop="message">
                <el-input
                    v-model="targetData.message"
                    name="message"
                    placeholder="message"
                ></el-input>
              </el-form-item>
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
import {defineComponent, ref} from "vue";
import {hideModal} from "@/core/helpers/dom";
import Swal from "sweetalert2";
import {GlobalStore} from "@/stores/global";
import {useI18n} from "vue-i18n";

interface payload {
  "device": {
    "serialNumber": string
  },
  "appLabel": string,
  "cardSlot": string,
  "message": string,
  "nonce": string
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
    
    const targetData = ref<payload>({
      appLabel: "10",
      cardSlot: "0",
      message: "sdasda",
      nonce: "asnjbhanjsdka",
      device: {
        serialNumber: "0005",
      },
    });
    
    const rules = ref({
      appLabel: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      cardSlot: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      message: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      nonce: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      device: [
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
          await Action_Start('post', 'verifications', '', targetData.value).then(async Response => {
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
            await Action_Start('get', 'verifications', 'Verifications')
          }).catch(async Error => {
            console.log(Error)
            loading.value = false;
            await Action_Start('get', 'verifications', 'Verifications')
          })
        } else {
          return false;
        }
        
      });
    };
    
    return {
      targetData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
      getAssetPath,
      State,
      translate,
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
