<template>
  <div
      class="modal fade"
      id="kt_modal_new_version"
      ref="newTargetModalRef"
      tabindex="-1"
      aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content rounded">
        <div class="modal-header pb-0 border-0 justify-content-end">
          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1"/>
          </div>
        </div>

        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <el-form
              id="kt_modal_new_target_form"
              @submit.prevent="submit()"
              :model="targetData"
              :rules="rules"
              ref="formRef"
              class="form"
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
                    v-model="targetData.versionName"
                    placeholder="Version Name"
                    name="versionName"
                ></el-input>
              </el-form-item>
            </div>

            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Version Number</span>
              </label>

              <el-form-item prop="versionNumber">
                <el-input
                    v-model="targetData.versionNumber"
                    placeholder="Version Number"
                    name="versionNumber"
                ></el-input>
              </el-form-item>
            </div>

            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Device Serial Number</span>
              </label>

              <el-form-item prop="deviceSerialNumber">
                <el-input
                    v-model="targetData.deviceSerialNumber"
                    placeholder="Device Serial Number"
                    name="deviceSerialNumber"
                ></el-input>
              </el-form-item>
            </div>

            <div class="d-flex flex-column mb-8 fv-row">
              <label class="required fs-6 fw-semobold mb-2">Device Type</label>

              <el-form-item prop="deviceType">
                <el-select
                    v-model="targetData.deviceType"
                    placeholder="Device Type"
                    name="deviceType"
                    as="select"
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
                    v-model="targetData.hardwareVersions"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="Choose tags for your target"
                    :value-key="'name'"
                >
                  <el-option label="TPS388" :value="{name: 'TPS388'}"></el-option>
                  <el-option label="e-BioKECpro" :value="{name: 'e-BioKECpro'}"></el-option>
                  <el-option label="TPS900" :value="{name: 'TPS900'}"></el-option>
                </el-select>
              </el-form-item>
            </div>


            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Update Package</span>
              </label>

              <el-form-item prop="file">
                <input type="file" class="form-control" @change="handleFileChange">
              </el-form-item>
            </div>

            <div class="text-center">
              <button
                  type="reset"
                  id="kt_modal_new_target_cancel"
                  class="btn btn-light me-3"
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
                  <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0"/>
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

interface payload {
  versionName: string;
  versionNumber: string;
  deviceSerialNumber: string;
  deviceType: string;
  hardwareVersions: { name: string }[];
  file: Array<string>
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
      versionName: "",
      versionNumber: "",
      deviceSerialNumber: "",
      deviceType: "",
      hardwareVersions: [],
      file: []
    });

    const rules = ref({
      versionName: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      versionNumber: [
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
      hardwareVersions: [
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
    });

    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          const bytes = new Uint8Array(arrayBuffer);
          targetData.value.file = Array.from(bytes, (byte) => byte.toString(16))
        };
        reader.readAsArrayBuffer(file);
      }
    };

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate(async (valid: boolean) => {
        console.log('valid', valid)
        if (valid) {
          loading.value = true;

          await Action_Start('post', 'versions', '', [
            {
              "versionNumberSemantic": "1.0.10",
              "name": "Rıza Test Yazılım Version 1.0.10",
              "file": targetData.value.file,
              "hardwareVersions": [
                {
                  "name": "TPS388"
                }
              ],
              "deviceSerialNumber": "00001",
              "deviceType": "2",
              "versionScheduleTime": "2023-09-11T16:40:02.58+03",
              "forceUpdate": false
            }
          ])

          if (!State.Errors) {
            setTimeout(() => {
              loading.value = false;

              Swal.fire({
                text: "Form has been successfully submitted!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                heightAuto: false,
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then(async () => {
                await Action_Start('get', 'versions', 'Versions')
                hideModal(newTargetModalRef.value);
              });
            }, 2000);
          } else {
            loading.value = false;
            Swal.fire({
              text: "Sorry, looks like there are some errors detected, please try again.",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          }
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "warning",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
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
      handleFileChange
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
