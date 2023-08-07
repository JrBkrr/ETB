<template>
  <div
      class="modal fade"
      id="kt_modal_update_device"
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
            <KTIcon icon-name="cross" icon-class="fs-1" />
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
                <span class="required">province</span>
              </label>
              
              <el-form-item prop="province">
                <el-input
                    v-model="targetData.province"
                    placeholder="province"
                    name="province"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="d-flex flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">district</span>
              </label>
              
              <el-form-item prop="district">
                <el-input
                    v-model="targetData.district"
                    placeholder="district"
                    name="district"
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
                    placeholder="branch"
                    name="branch"
                ></el-input>
              </el-form-item>
            </div>
            
            <div class="text-center">
              <button
                  type="reset"
                  id="kt_modal_update_target_cancel"
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
                  <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
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
import {defineComponent, ref, watch} from "vue";
import {hideModal} from "@/core/helpers/dom";
import {GlobalStore} from "@/stores/global";

interface payload {
  serialNumber: string;
  province: string;
  district: string;
  branch: string;
}

export default defineComponent({
  name: "new-target-modal",
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {Action_Start, State} = GlobalStore()
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    
    const targetData = ref<payload>({
      serialNumber: props.item.serialNumber,
      province: props.item.province,
      district: props.item.district,
      branch: props.item.branch,
    });
    
    const rules = ref({
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
    });
    
    const submit = () => {
      if (!formRef.value) {
        return;
      }
      
      formRef.value.validate(async (valid: boolean) => {
        await Action_Start('put', 'devices/updateAddress', '', targetData.value).then(async Response => {
          setTimeout(() => {
            loading.value = false;
            State.Notifications.push({
              head: 'İşlem Başarılı',
              title: `Cihaz başarılı bir şekilde güncellendi`,
              variant: 'success',
              status: false
            })
            hideModal(newTargetModalRef.value);
          }, 2000);
          await Action_Start('get', 'devices', 'Devices')
        })
      });
    };
    
    watch(
        () => props.item,
        (newItem) => {
          if (newItem) {
            targetData.value.serialNumber = newItem.serialNumber;
            targetData.value.province = newItem.province;
            targetData.value.district = newItem.district;
            targetData.value.branch = newItem.branch;
          }
        }
    );
    
    return {
      targetData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
      getAssetPath,
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
