<template>
  <div class="row h-100 px-10">
    <DoPayment
        class="col me-4"
        title="Do Payment!"
        description="Do Payment açıklama"
        :image="getIllustrationsPath('20.png')"
        button-text="Payment"
        modal-id="kt_modal_do_payment"
    ></DoPayment>
    <OpenKC
        class="col ms-4"
        title="Open KC!"
        description="Open KC açıklama"
        :image="getIllustrationsPath('9.png')"
        button-text="Open KC"
        modal-id="kt_modal_add_customer"
    ></OpenKC>
  </div>
  
  <DoPaymentCreate />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DoPayment from "@/components-ekds/payments/DoPayment.vue";
import DoPaymentCreate from "@/components-ekds/payments/DoPaymentCreate.vue";
import OpenKC from "@/components-ekds/payments/OpenKC.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import {getIllustrationsPath} from "@/core/helpers/assets";

export default defineComponent({
  name: "dashboard-main",
  methods: {getIllustrationsPath},
  components: {
    AddCustomerModal,
    defineComponent,
    DoPayment,
    DoPaymentCreate,
    OpenKC,
  },
});
</script>
