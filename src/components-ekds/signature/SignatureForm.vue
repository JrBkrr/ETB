<template>
  <!--begin::Form-->
  <form id="kt_modal_create_app_form" class="form" @submit="handleStep">
    <div v-show="!Progress" class="vh-50 overflow-y-scroll px-3">
      <CreateAppStep1></CreateAppStep1>
      <CreateAppStep2></CreateAppStep2>
      <CreateAppStep3></CreateAppStep3>
      <CreateAppStep4></CreateAppStep4>
      <CreateAppStep5></CreateAppStep5>
    </div>
    <div v-if="Progress" class="vh-50 overflow-y-scroll px-3 d-flex flex-column align-items-center justify-content-center">
      
      <div v-if="Progress === 'warning'" class="d-flex align-items-start">
        <div class="d-flex align-items-center justify-content-center border border-2 border-warning rounded-circle p-3 mx-4 animated_warning">
          <i :class="`bi-${'exclamation-circle'}`" class="bi fs-2hx text-warning fw-bold"></i>
        </div>
        <div>
          <p class="fs-4 text-dark fw-bold mb-0">Warning</p>
          <p class="fs-5 text-dark">The server or the device is not available right now. Please try again later</p>
        </div>  
      </div>

      <div v-if="Progress === 'connecting'" class="d-flex align-items-start">
        <div class="d-flex align-items-center justify-content-center border border-2 border-primary rounded-circle p-3 mx-4 animated_primary">
          <i :class="`bi-${'lightning'}`" class="bi fs-2hx text-primary fw-bold"></i>
        </div>
        <div>
          <p class="fs-4 text-dark fw-bold mb-0">Connecting</p>
          <p class="fs-5 text-dark">Connecting to device please hold</p>
        </div>  
      </div>

      <div v-if="Progress === 'connected'" class="d-flex align-items-start">
        <div class="d-flex align-items-center justify-content-center border border-2 border-success rounded-circle p-3 mx-4 animated_success">
          <i :class="`bi-${'broadcast'}`" class="bi fs-2hx text-success fw-bold"></i>
        </div>
        <div>
          <p class="fs-4 text-dark fw-bold mb-0">Connected</p>
          <p class="fs-5 text-dark">Connection completed successfully</p>
        </div>  
      </div>
    
    </div>
    <!--begin::Actions-->
    <div class="d-flex flex-stack pt-10">
      <!--begin::Wrapper-->
      <div class="me-2">
        <button class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous" type="button"
          @click="previousStep()">
          <KTIcon icon-class="fs-3 me-1" icon-name="arrow-left" />
          Back
        </button>
      </div>
      <!--end::Wrapper-->

      <!--begin::Wrapper-->
      <div>
        <button v-if="currentStepIndex === totalSteps - 1" class="btn btn-lg btn-primary" type="submit"
          @click="formSubmit()">
          <span class="indicator-label">
            Submit
            <KTIcon icon-class="fs-3 ms-2 me-0" icon-name="arrow-right" />
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>

        <button v-else class="btn btn-lg btn-primary" type="submit">
          Continue
          <KTIcon icon-class="fs-3 ms-1 me-0" icon-name="arrow-right" />
        </button>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Actions-->
  </form>
  <!--end::Form-->
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref } from "vue";

import Swal from "sweetalert2";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { StepperComponent } from "@/assets/ts/components";
import type {
  ICreateApp,
  IStep1,
  IStep2,
  IStep3,
  IStep4,
} from "@/components/modals/wizards/create-app-modal/types";
import CreateAppStep1 from "@/components-ekds/signature/steps/Step1.vue";
import CreateAppStep2 from "@/components-ekds/signature/steps/Step2.vue";
import CreateAppStep3 from "@/components-ekds/signature/steps/Step3.vue";
import CreateAppStep4 from "@/components-ekds/signature/steps/Step4.vue";
import CreateAppStep5 from "@/components-ekds/signature/steps/Step5.vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import { GlobalStore } from "@/stores/global";
interface Props {
  stepperEl: HTMLElement | null;
}

const props = defineProps<Props>();

const currentStepIndex = ref(0);
const stepperObj = ref<StepperComponent | null>(null);

const { Action_Start } = GlobalStore()
const Progress = ref('')

onMounted(() => {
  nextTick(() => {
    if (props.stepperEl) {
      stepperObj.value = StepperComponent.createInsance(props.stepperEl);
    }
  });
});

const formData = ref<ICreateApp>({
  gsm: 'string',
  email: 'string',
  day: 'string',
  month: 'string',
  year: 'string',
  serviceType: 'string',
  verificationMethod: 'string',
  verificationMessage: 'string',
  fields: 'string',
  framework: "1",
  dbName: "",
  dbType: "1",
  nameOnCard: "Max Doe",
  cardNumber: "4111 1111 1111 1111",
  cardExpiryMonth: "1",
  cardExpiryYear: "2",
  cardCvv: "123",
  saveCard: "1",
});

const formInitData = ref<ICreateApp>(formData.value);

const createAppSchema = [
  Yup.object({
    gsm: Yup.string().required().label("gsm"),
    email: Yup.string().required().label("email"),
    day: Yup.string().required().label("day"),
    month: Yup.string().required().label("month"),
    year: Yup.string().required().label("year"),
    serviceType: Yup.string().required().label("serviceType"),
    verificationMethod: Yup.string().required().label("verificationMethod"),
    verificationMessage: Yup.string().required().label("verificationMessage"),
    fields: Yup.string().required().label("fields"),
  }),
  Yup.object({
    framework: Yup.string().required().label("Framework"),
  }),
  Yup.object({
    dbName: Yup.string().required().label("Database name"),
    dbType: Yup.string().required().label("Database engine"),
  }),
  Yup.object({
    nameOnCard: Yup.string().required().label("Name"),
    cardNumber: Yup.string().required().label("Card Number"),
    cardExpiryMonth: Yup.string().required().label("Expiration Month"),
    cardExpiryYear: Yup.string().required().label("Expiration Year"),
    cardCvv: Yup.string().required().label("CVV"),
  }),
];

// extracts the individual step schema
const currentSchema = computed(() => {
  return createAppSchema[currentStepIndex.value];
});

const totalSteps = computed(() => {
  if (stepperObj.value) {
    return stepperObj.value.totalStepsNumber;
  } else {
    return 1;
  }
});

const { resetForm, handleSubmit } = useForm<IStep1 | IStep2 | IStep3 | IStep4>({
  validationSchema: currentSchema,
  initialValues: formData.value,
});

const previousStep = () => {
  currentStepIndex.value--;

  if (!stepperObj.value) {
    return;
  }

  stepperObj.value.goPrev();
};

const handleStep = handleSubmit(async (values) => {
  console.log(values);

  formData.value = {
    ...formData.value,
    ...values,
  };

  Progress.value = 'connecting'

  await Action_Start('get', 'devices', 'Devices', '', '', false).then(() => {
    setTimeout(() => {
      Progress.value = 'connected'
    }, 2000);
  })

  setTimeout(() => {
    Progress.value = 'warning'
  }, 4000);

  setTimeout(() => {
    Progress.value = ''
  }, 6000);

  resetForm({
    values: {
      ...formData.value,
    },
  });

  currentStepIndex.value++;

  if (!stepperObj.value) {
    return;
  }

  stepperObj.value.goNext();
});

const formSubmit = () => {
  Swal.fire({
    text: "All is cool! Now you submit this form",
    icon: "success",
    buttonsStyling: false,
    confirmButtonText: "Ok, got it!",
    heightAuto: false,
    customClass: {
      confirmButton: "btn fw-semobold btn-light-primary",
    },
  }).then(() => {
    stepperObj.value?.goFirst();
    currentStepIndex.value = 0;

    resetForm({
      values: {
        ...formInitData.value,
      },
    });
  });
};
</script>

<style>
.animated_warning {
  animation: drop_warning 1s linear infinite alternate;
}

@keyframes drop_warning {
  0% {
    filter: drop-shadow(0 0 1px rgb(255, 156, 7));
    box-shadow: 0 0 1px rgba(255, 156, 7, 0.2);
  }

  100% {
    filter: drop-shadow(0 0 5px rgba(255, 156, 7, 1));
    box-shadow: 0 0 20px rgba(255, 156, 7, 0.5);
  }
}

.animated_primary {
  animation: drop_primary 1s linear infinite alternate;
}

@keyframes drop_primary {
  0% {
    filter: drop-shadow(0 0 1px rgba(13, 110, 253, 1));
    box-shadow: 0 0 1px rgba(13, 110, 253, .2);
  }

  100% {
    filter: drop-shadow(0 0 5px rgba(13, 110, 253, 1));
    box-shadow: 0 0 20px rgba(13, 110, 253, .5);
  }
}

.animated_success {
  animation: drop_success 1s linear infinite alternate;
}

@keyframes drop_success {
  0% {
    filter: drop-shadow(0 0 1px rgba(25, 135, 84, 1));
    box-shadow: 0 0 1px rgba(25, 135, 84, .2);
  }

  100% {
    filter: drop-shadow(0 0 5px rgba(25, 135, 84, 1));
    box-shadow: 0 0 20px rgba(25, 135, 84, .5);
  }
}
</style>