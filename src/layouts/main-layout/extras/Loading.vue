<template>
  <div
      :class="[!isLoading && 'hidden-load']"
      class="position-fixed w-100 h-100 d-flex align-items-center justify-content-center bg-light bg-opacity-50 top-0 left-0 transition-md"
      style="z-index: 9999"
  >
    <div class="spinner-border p-5"></div>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  setup() {
    const {State} = GlobalStore();

    // Computed propertisi tanımlayalım
    const isLoading = computed(() => {
      return State.Loading;
    });

    return {
      isLoading,
    };
  },
});
</script>

<style scoped>
.transition-md {
  transition: all .3s;
}
.hidden-load {
  visibility: hidden;
  opacity: 0;
}
</style>