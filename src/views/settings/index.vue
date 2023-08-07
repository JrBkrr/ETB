<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <SettingsTable v-model:item="item" />
  </div>
  <!--end::Dashboard-->
  <SettingCreate />
  <SettingUpdate :item="item" />
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import {getAssetPath} from "@/core/helpers/assets";
import SettingsTable from "@/components-ekds/settings/SettingsTable.vue";
import SettingCreate from "@/components-ekds/settings/SettingCreate.vue";
import SettingUpdate from "@/components-ekds/settings/SettingUpdate.vue";
import DevicesTable from "@/components-ekds/devices/DevicesTable.vue";

export default defineComponent({
  name: "dashboard-main",
  methods: {getAssetPath},
  components: {
    DevicesTable,
    SettingsTable,
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
