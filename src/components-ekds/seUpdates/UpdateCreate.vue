<template>
  <div
      id="kt_modal_new_update_set"
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
              <h1 class="mb-3">Create New Setting</h1>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">name</span>
              </label>
              
              <el-form-item prop="name">
                <el-input
                    v-model="targetData.comment"
                    name="name"
                    placeholder="name"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">description</span>
              </label>
              
              <el-form-item prop="description">
                <el-input
                    v-model="targetData.operatingSystem"
                    name="description"
                    placeholder="description"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Devices</span>
              </label>
              
              <el-form-item prop="hardwareVersions">
                <el-select
                    :model-value="targetData.devices"
                    value-key="id"
                    allow-create
                    default-first-option
                    filterable
                    multiple
                    placeholder="Choose tags for your target"
                    @change="e => targetData.versions = e.map(a => a = {id: a.id})"
                >
                  <el-option v-for="hardware in State.Devices" :key="`hardware-${hardware.serialNumber}`" :label="hardware.serialNumber" :value="hardware" />
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Versions</span>
              </label>
              
              <el-form-item prop="hardwareVersions">
                <el-select
                    :model-value="targetData.versions"
                    value-key="id"
                    allow-create
                    default-first-option
                    filterable
                    multiple
                    placeholder="Choose tags for your target"
                    @change="e => targetData.versions = e.map(a => a = {id: a.id})"
                >
                  <el-option v-for="hardware in State.Versions" :label="hardware.name" :value="hardware" />
                </el-select>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Settings</span>
              </label>
              
              <span
                  @click="settingValues.push({setting: {id: 'aa'},value: ''})"
                  class="btn btn-light me-3"
              >
                Add
              </span>
              
              <div v-if="State.Settings.length > 0" v-for="(value,idx) in settingValues" class="d-flex align-items-center justify-content-between">
                <el-form-item class="m-0" prop="deviceSerialNumber">
                  <el-select
                      v-model="value.setting.id"
                      as="select"
                      name="deviceSerialNumber"
                      placeholder="Device Serial Number"
                  >
                    <el-option v-for="(setting) in State.Settings" :key="`setting-1-${setting.id}`" :label="setting.name" :value="setting.id" />
                  </el-select>
                </el-form-item>
                <el-form-item class="m-0" prop="description">
                  <el-input
                      v-model="value.value"
                      name="description"
                      placeholder="description"
                  ></el-input>
                </el-form-item>
                <span
                    @click="settingValues.splice(idx,1)"
                    class="btn p-0 btn-icon btn-color-danger btn-active-danger border border-danger"
                >
                  <KTIcon icon-class="fs-2" icon-name="trash" />
                </span>
              </div>
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
import {GlobalStore} from "@/stores/global";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";

interface Device {
  id: string;
}

interface Version {
  id: string;
}

interface Setting {
  id: string;
}

interface SettingValue {
  setting: Setting;
  value: string;
}

interface Template {
  comment: string;
  operatingSystem: string;
  effectiveDateTime: string;
  devices: Device[];
  versions: Version[];
  settingValues: SettingValue[];
}


export default defineComponent({
  name: "new-target-modal",
  components: {KTIcon},
  setup() {
    const {Action_Start, State} = GlobalStore()
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const settingValues = ref<SettingValue[]>([{
      "setting": {
        "id": "16"
      },
      "value": "deneme değer"
    }])
    
    const targetData = ref<Template>({
      comment: "deneme comment",
      operatingSystem: "asd",
      effectiveDateTime: "2023-07-20T00:00:00.00+03",
      devices: [
        {
          id: "1"
        }
      ],
      versions: [
        {
          id: "1"
        }
      ],
      settingValues: [
        {
          setting: {
            id: "16"
          },
          value: "deneme değer"
        }
      ]
    });
    
    const rules = ref({
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
    });
    const submit = () => {
      if (!formRef.value) {
        return;
      }
      
      formRef.value.validate(async (valid: boolean) => {
        await Action_Start('post', 'settings-updates', '', targetData.value).then(async Response => {
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
          await Action_Start('get', 'settings-updates', 'SeUpdates')
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
      State,
      settingValues
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
