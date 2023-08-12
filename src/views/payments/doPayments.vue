<template>
  <div class="row flex-wrap h-100 px-10 overflow-auto">
    <DoPayment
        :image="getIllustrationsPath('20.png')"
        button-text="Payment"
        class="col-12 col-xl me-xl-4 mb-8 mb-xl-0"
        description="Do Payment açıklama"
        modal-id="kt_modal_do_payment"
        title="Do Payment!"
    ></DoPayment>
    <OpenKC
        :image="getIllustrationsPath('9.png')"
        button-text="Open KC"
        class="col-12 col-xl ms-xl-4 "
        description="Open KC açıklama"
        modal-id="kt_modal_open_kc"
        title="Open KC!"
    ></OpenKC>
  </div>
  
  <DoPaymentCreate />
  <OpenKCCreate />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DoPayment from "@/components-ekds/payments/DoPayment.vue";
import DoPaymentCreate from "@/components-ekds/payments/DoPaymentCreate.vue";
import OpenKC from "@/components-ekds/payments/OpenKC.vue";
import OpenKCCreate from "@/components-ekds/payments/OpenKCCreate.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import {getIllustrationsPath} from "@/core/helpers/assets";

export default defineComponent({
  name: "doPayments",
  methods: {getIllustrationsPath},
  components: {
    AddCustomerModal,
    defineComponent,
    DoPayment,
    DoPaymentCreate,
    OpenKC,
    OpenKCCreate
  },
});
</script>
