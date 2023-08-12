<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <UpdateTable v-model:item="item" />
  </div>
  <!--end::Dashboard-->
  <UpdateCreate />
  <UpdateUpdate :item="item" />
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import {getAssetPath} from "@/core/helpers/assets";
import UpdateTable from "@/components-ekds/seUpdates/UpdateTable.vue";
import UpdateCreate from "@/components-ekds/seUpdates/UpdateCreate.vue";
import UpdateUpdate from "@/components-ekds/seUpdates/UpdateUpdate.vue";

export default defineComponent({
  name: "updates",
  methods: {getAssetPath},
  components: {
    UpdateTable,
    KTIcon,
    UpdateCreate,
    UpdateUpdate
  },
  setup() {
    const item = ref({})
    
    return {item}
  }
});
</script>
