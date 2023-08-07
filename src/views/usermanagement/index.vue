<template>
  <!--begin::Dashboard-->
  <div class="row px-10 h-100">
    <UsersTable v-model:item="item"></UsersTable>
  </div>
  <UserCreate></UserCreate>
  <UserUpdate :item="item"></UserUpdate>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import UsersTable from "@/components-ekds/users/UsersTable.vue";
import UserCreate from "@/components-ekds/users/UserCreate.vue";
import UserUpdate from "@/components-ekds/users/UserUpdate.vue";
import DevicesTable from "@/components-ekds/devices/DevicesTable.vue";

export default defineComponent({
  name: "user-management",
  components: {
    DevicesTable,
    UserCreate,
    UsersTable,
    UserUpdate
  },
  setup() {
    const item = ref({})
    return {
      item
    }
  }
});
</script>
