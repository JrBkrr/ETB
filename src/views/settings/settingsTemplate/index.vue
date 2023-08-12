<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <TempTable v-model:item="item" />
  </div>
  <!--end::Dashboard-->
  <TempCreate />
  <TempUpdate :item="item" />
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import {getAssetPath} from "@/core/helpers/assets";
import TempTable from "@/components-ekds/seTemp/TempTable.vue";
import TempCreate from "@/components-ekds/seTemp/TempCreate.vue";
import TempUpdate from "@/components-ekds/seTemp/TempUpdate.vue";

export default defineComponent({
  name: "template",
  methods: {getAssetPath},
  components: {
    TempTable,
    KTIcon,
    TempCreate,
    TempUpdate
  },
  setup() {
    const item = ref({})
    
    return {item}
  }
});
</script>
