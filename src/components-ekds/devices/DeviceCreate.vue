<template>
  <div
      id="kt_modal_new_device"
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
              <h1 class="mb-3">Create New Version</h1>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">serialNumber</span>
              </label>
              
              <el-form-item prop="serialNumber">
                <el-input
                    v-model="targetData.serialNumber"
                    name="serialNumber"
                    placeholder="serialNumber"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">province</span>
              </label>
              
              <el-form-item prop="province">
                <el-select
                    v-model="targetData.province"
                    as="select"
                    name="province"
                    placeholder="province"
                >
                  <el-option value="">Select type...</el-option>
                  <el-option v-for="city in State.Cities" :label="city.name" :value="city.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">district</span>
              </label>
              
              <el-form-item prop="district">
                <el-input
                    v-model="targetData.district"
                    name="district"
                    placeholder="district"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">branch</span>
              </label>
              
              <el-form-item prop="branch">
                <el-input
                    v-model="targetData.branch"
                    name="branch"
                    placeholder="branch"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">hardwareVersionName</span>
              </label>
              <el-form-item prop="hardwareVersion">
                <el-select
                    v-model="targetData.hardwareVersion.name"
                    as="select"
                    name="hardwareVersion"
                    placeholder="hardwareVersionName"
                >
                  <el-option value="">Select type...</el-option>
                  <el-option v-for="hardware in State.HVersions" :label="hardware.name" :value="hardware.name">
                    {{ hardware.name }}
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">versionNumberSemantic</span>
              </label>
              
              <el-form-item prop="">
                <el-input
                    v-model="targetData.version.versionNumberSemantic"
                    name="versionNumberSemantic"
                    placeholder="versionNumberSemantic"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">versionName</span>
              </label>
              
              <el-form-item prop="">
                <el-input
                    v-model="targetData.version.name"
                    name="versionName"
                    placeholder="versionName"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="required fs-6 fw-semobold mb-2">deviceType</label>
              
              <el-form-item prop="">
                <el-select
                    v-model="targetData.version.deviceType"
                    as="select"
                    name="deviceType"
                    placeholder="deviceType"
                >
                  <el-option value="">Select type...</el-option>
                  <el-option label="Type 2" value="2">Type 2</el-option>
                  <el-option label="Type 3" value="3">Type 3</el-option>
                </el-select>
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
import {defineComponent, onMounted, ref} from "vue";
import {hideModal} from "@/core/helpers/dom";
import {GlobalStore} from "@/stores/global";

interface payload {
  serialNumber: string;
  province: string;
  district: string;
  branch: string;
  hardwareVersion: {
    name: string;
  };
  version: {
    versionNumberSemantic: string;
    name: string;
    deviceType: string;
  };
}

export default defineComponent({
  name: "new-target-modal",
  components: {},
  setup() {
    const {Action_Start, State} = GlobalStore()
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    
    const targetData = ref<payload>({
      serialNumber: "0005",
      province: "İstanbul",
      district: "Maslak",
      branch: "Etb Ana şube",
      hardwareVersion: {
        name: "TPS388",
      },
      version: {
        versionNumberSemantic: "1.0.9",
        name: "Deniz Test Yazılım Version1.0.9",
        deviceType: "2",
      },
    });
    
    onMounted(async () => {
      // await Action_Start('get', 'hardwareVersions', 'HVersions')
    })
    
    const rules = ref({
      serialNumber: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      province: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      district: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      branch: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      hardwareVersion: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      versionNumberSemantic: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      versionName: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      deviceType: [
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
        await Action_Start('post', 'devices', '', targetData.value).then(async Response => {
          setTimeout(() => {
            loading.value = false;
            hideModal(newTargetModalRef.value);
            State.Notifications.push({
              head: 'İşlem Başarılı',
              title: `Cihaz başarılı bir şekilde eklendi`,
              variant: 'success',
              status: false
            })
          }, 2000);
          await Action_Start('get', 'devices', 'Devices')
        })
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
