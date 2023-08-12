<template>
  <!--begin::Step 1-->
  <div class="current" data-kt-stepper-element="content">
    <div class="w-100">
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
          <span class="required">GSM</span>
          <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Specify your unique app name"
          ></i>
        </label>
        <!--end::Label-->
        
        <!--begin::Input-->
        <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="gsm"
            placeholder=""
        />
        <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="gsm"
        />
        <!--end::Input-->
      </div>
      <!--end::Input group-->
      
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
          <span class="required">E-Mail</span>
          <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Specify your unique app name"
          ></i>
        </label>
        <!--end::Label-->
        
        <!--begin::Input-->
        <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="email"
            placeholder=""
        />
        <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="email"
        />
        <!--end::Input-->
      </div>
      <!--end::Input group-->
      
      
      <!--begin::Input group-->
      <div class="row mb-10">
        <!--begin::Col-->
        <div class="fv-row">
          <!--begin::Label-->
          <label class="required fs-6 fw-semobold form-label mb-2"
          >Birth Date</label
          >
          <!--end::Label-->
          
          <!--begin::Row-->
          <div class="row fv-row">
            <!--begin::Col-->
            <div class="col-4">
              <Field
                  name="day"
                  class="form-select form-select-solid select2-hidden-accessible"
                  placeholder="day"
                  as="select"
              >
                <option
                    v-for="i in 31"
                    :key="i"
                    :label="(i).toString()"
                    :value="(i).toString()"
                ></option>
              </Field>
              <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="day"
              />
            </div>
            <!--end::Col-->
            
            <!--begin::Col-->
            <div class="col-4">
              <Field
                  name="month"
                  class="form-select form-select-solid select2-hidden-accessible"
                  placeholder="month"
                  as="select"
              >
                <option
                    v-for="i in 12"
                    :key="i"
                    :label="i.toString()"
                    :value="i"
                ></option>
              </Field>
              <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="month"
              />
            </div>
            <!--end::Col-->
            
            <!--begin::Col-->
            <div class="col-4">
              <Field
                  name="year"
                  class="form-select form-select-solid select2-hidden-accessible"
                  placeholder="year"
                  as="select"
              >
                <option
                    v-for="i in 10"
                    :key="i"
                    :label="(i + (new Date().getFullYear() - 1)).toString()"
                    :value="(i + (new Date().getFullYear() - 1)).toString()"
                ></option>
              </Field>
              <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="year"
              />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Row-->
        </div>
        <!--end::Col-->
      </div>
      
      <!--begin::Col-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
          <span class="required">Service Type</span>
          <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Specify your unique app name"
          ></i>
        </label>
        <!--end::Label-->
        
        <Field
            name="serviceType"
            class="form-select form-select-solid select2-hidden-accessible"
            placeholder="serviceType"
            as="select"
        >
          <option
              v-for="i in 10"
              :key="i"
              :label="(i + (new Date().getFullYear() - 1)).toString()"
              :value="i"
          ></option>
        </Field>
        <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="serviceType"
        />
      </div>
      <!--end::Col-->
      
      <!--begin::Col-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
          <span class="required">Verification Method</span>
          <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Specify your unique app name"
          ></i>
        </label>
        <!--end::Label-->
        
        <Field
            name="verificationMethod"
            class="form-select form-select-solid select2-hidden-accessible"
            placeholder="verificationMethod"
            as="select"
        >
          <option
              v-for="i in 10"
              :key="i"
              :label="(i + (new Date().getFullYear() - 1)).toString()"
              :value="i"
          ></option>
        </Field>
        <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="verificationMethod"
        />
      </div>
      <!--end::Col-->
      
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
          <span class="required">Verification Message</span>
          <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Specify your unique app name"
          ></i>
        </label>
        <!--end::Label-->
        
        <!--begin::Input-->
        <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="verificationMessage"
            placeholder="verificationMessage"
        />
        <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="verificationMessage"
        />
        <!--end::Input-->
      </div>
      <!--end::Input group-->
      
      
      <!--begin::Col-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
          <span class="required">Fields</span>
          <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Specify your unique app name"
          ></i>
        </label>
        <!--end::Label-->
        
        <Field
            name="fields"
            class="form-select form-select-solid select2-hidden-accessible"
            placeholder="fields"
            as="select"
        >
          <option
              v-for="i in 10"
              :key="i"
              :label="(i + (new Date().getFullYear() - 1)).toString()"
              :value="i"
          ></option>
        </Field>
        <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="fields"
        />
      </div>
      <!--end::Col-->
      
      <!--end::Input group-->
    </div>
  </div>
  <!--end::Step 1-->
</template>

<script setup lang="ts">
import {ErrorMessage, Field} from "vee-validate";
</script>
