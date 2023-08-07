<template>
  <div
      id="kt_modal_open_kc"
      ref="addCustomerModalRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_modal_add_customer_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Open KC</h2>
          <!--end::Modal title-->
          
          <!--begin::Close-->
          <div
              id="kt_modal_add_customer_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
          >
            <KTIcon icon-class="fs-1" icon-name="cross" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
            ref="formRef"
            :model="formData"
            :rules="rules"
            @submit.prevent="submit()"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
                id="kt_modal_add_customer_scroll"
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_add_customer_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
            >
              
              <!--begin::Input group-->
              <div class="d-flex flex-stack mb-8">
                <!--begin::Label-->
                <div class="me-5">
                  <label class="fs-6 fw-semobold"
                  >Open Kec</label
                  >
                </div>
                <!--end::Label-->
                
                <!--begin::Switch-->
                <label
                    class="form-check form-switch form-check-custom form-check-solid"
                >
                  <input
                      id="update-ussss"
                      v-model="formData.openKec"
                      class="form-check-input"
                      type="checkbox"
                  />
                  <span class="form-check-label fw-semobold text-gray-400">
                  {{ formData.openKec ? 'Allowed' : 'Dismiss' }}
                </span>
                </label>
                <!--end::Switch-->
              </div>
              <!--end::Input group-->
              
              <div
                  id="kt_modal_add_customer_billing_info"
                  class="collapse show"
              >
                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">
                    <span class="required">Device Serial Number</span>
                  </label>
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <el-select v-model="formData.deviceSerialNumber">
                    <el-option value="">Select a Device...</el-option>
                    <el-option
                        v-for="(item, i) in State.Devices"
                        :key="`countries-select-option-${i}`"
                        :value="item.serialNumber"
                    >
                      {{ item.serialNumber }}
                    </el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
              
              </div>
              <!--end::Billing form-->
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->
          
          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
                id="kt_modal_add_customer_cancel"
                class="btn btn-light me-3"
                type="reset"
            >
              Discard
            </button>
            <!--end::Button-->
            
            <!--begin::Button-->
            <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <KTIcon icon-class="fs-2 me-2 me-0" icon-name="arrow-right" />
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, ref} from "vue";
import {hideModal} from "@/core/helpers/dom";
import {countries} from "@/core/data/countries";
import Swal from "sweetalert2";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  name: "add-customer-modal",
  components: {},
  setup() {
    const {State, Action_Start} = GlobalStore()
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref({
      openKec: true,
      deviceSerialNumber: ''
    });
    
    const rules = ref({
      openKec: [
        {
          required: true,
          message: "Customer name is required",
          trigger: "change",
        },
      ],
      deviceSerialNumber: [
        {
          required: true,
          message: "Customer email is required",
          trigger: "change",
        },
      ],
    });
    
    const submit = () => {
      if (!formRef.value) {
        return;
      }
      
      formRef.value.validate(async (valid: boolean) => {
        await Action_Start('post', '/paymentRequest/openKec', '', formData.value).then(async Response => {
          setTimeout(() => {
            loading.value = false;
            State.Notifications.push({
              head: 'İşlem Başarılı',
              title: `e-Bio-Kec Pro uygulamsı cihazda açılmıştır`,
              variant: 'success',
              status: false
            })
            hideModal(addCustomerModalRef.value);
          }, 2000);
        })
        
      });
    };
    
    return {
      State,
      formData,
      rules,
      submit,
      formRef,
      loading,
      addCustomerModalRef,
      getAssetPath,
      countries,
    };
  },
});
</script>
