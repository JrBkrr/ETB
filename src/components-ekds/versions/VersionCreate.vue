<template>
  <div
      id="kt_modal_new_version"
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
                <span class="required">Version Name</span>
              </label>
              
              <el-form-item prop="versionName">
                <el-input
                    v-model="targetData.name"
                    name="versionName"
                    placeholder="Version Name"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Version Number</span>
              </label>
              
              <el-form-item prop="versionNumber">
                <el-input
                    v-model="targetData.versionNumberSemantic"
                    name="versionNumberSemantic"
                    placeholder="Version Number Semantic"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Device Serial Number</span>
              </label>
              
              <el-form-item prop="deviceSerialNumber">
                <el-select
                    v-model="targetData.deviceSerialNumber"
                    as="select"
                    name="deviceSerialNumber"
                    placeholder="Device Serial Number"
                >
                  <el-option v-for="device in State.Devices" :key="`device-1-${device.id}`" :label="device.serialNumber" :value="device.serialNumber"></el-option>
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="required fs-6 fw-semobold mb-2">Device Type</label>
              
              <el-form-item prop="deviceType">
                <el-select
                    v-model="targetData.deviceType"
                    as="select"
                    name="deviceType"
                    placeholder="Device Type"
                >
                  <el-option value="">Select type...</el-option>
                  <el-option label="Type 1" value="1">Type 1</el-option>
                  <el-option label="Type 2" value="2">Type 2</el-option>
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Build Versions</span>
              </label>
              
              <el-form-item prop="hardwareVersions">
                <el-select
                    :model-value="targetData.hardwareVersions"
                    value-key="name"
                    allow-create
                    default-first-option
                    filterable
                    multiple
                    placeholder="Choose tags for your target"
                    @change="e => targetData.hardwareVersions = e.map(a => a = {name: a.name})"
                >
                  <el-option v-for="hardware in List" :key="`hardware-${hardware.name}`" :label="hardware.name" :value="hardware" />
                </el-select>
              </el-form-item>
            </div>
            
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Update Package</span>
              </label>
              
              <el-form-item prop="file">
                <input class="form-control" type="file" @change="handleFileChange">
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
import {computed, defineComponent, ref, watch} from "vue";
import {hideModal} from "@/core/helpers/dom";
import {GlobalStore} from "@/stores/global";
import MultiDropDown from "@/components-ekds/dropdown/MultiDropDown.vue";

interface payload {
  "versionNumberSemantic": string,
  "name": string,
  "file": any,
  "hardwareVersions": { "name": string }[],
  "deviceSerialNumber": string,
  "deviceType": string,
  "versionScheduleTime": string,
  "forceUpdate": boolean
}

export default defineComponent({
  name: "new-target-modal",
  components: {MultiDropDown},
  setup() {
    const {Action_Start, State} = GlobalStore()
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    
    const targetData = ref<payload>({
      versionNumberSemantic: "",
      name: "",
      file: [],
      hardwareVersions: [],
      deviceSerialNumber: "",
      deviceType: "",
      versionScheduleTime: "2023-09-11T16:40:02.58+03",
      forceUpdate: false
    });
    
    const List = computed(() => State.HVersions)
    
    const rules = ref({
      versionNumberSemantic: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      name: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      file: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      hardwareVersions: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      deviceSerialNumber: [
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
      versionScheduleTime: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      forceUpdate: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
    });
    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          const bytes = new Uint8Array(arrayBuffer);
          targetData.value.file = Array.from(bytes, (byte) => byte.toString(16)).join(' ');
        };
        reader.readAsArrayBuffer(file);
      }
    };
    
    const submit = () => {
      if (!formRef.value) {
        return;
      }
      
      formRef.value.validate(async (valid: boolean) => {
        loading.value = true;
        
        await Action_Start('post', 'versions', '', [targetData.value]).then(async Response => {
          setTimeout(() => {
            loading.value = false;
            State.Notifications.push({
              head: 'İşlem Başarılı',
              title: `Version başarılı bir şekilde eklendi`,
              variant: 'success',
              status: false
            })
            hideModal(newTargetModalRef.value);
          }, 2000);
          await Action_Start('get', 'versions', 'Versions')
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
      handleFileChange,
      State,
      List
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
