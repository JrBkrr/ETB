<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <SettingTable v-model:item="item" />
  </div>
  <!--end::Dashboard-->
  <SettingCreate />
  <SettingUpdate :item="item" />
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import {getAssetPath} from "@/core/helpers/assets";
import SettingTable from "@/components-ekds/se/SeTable.vue";
import SettingCreate from "@/components-ekds/se/SeCreate.vue";
import SettingUpdate from "@/components-ekds/se/SeUpdate.vue";

export default defineComponent({
  name: "dashboard-main",
  methods: {getAssetPath},
  components: {
    SettingTable,
    KTIcon,
    SettingCreate,
    SettingUpdate
  },
  setup() {
    const item = ref({})
    
    return {item}
  }
});
</script>
