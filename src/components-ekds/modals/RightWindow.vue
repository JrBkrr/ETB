<template>
  <div @click="setRightWindow(false)" :class="[State.RightWindow.status && 'right-window-active']"
       class="right-window fixed-top bg-light bg-opacity-50 vw-100 vh-100 d-flex justify-content-end">
    <div @click.stop="setRightWindow(true)" :class="[State.RightWindow.status  && 'right-window-content-active']"
         class="right-window-content col-12 col-lg-4 bg-light shadow">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  setup() {
    const {State,setRightWindow} = GlobalStore()

    return {
      setRightWindow,
      State
    }
  }
})
</script>

<style scoped>
.right-window {
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
}

.right-window-active {
  opacity: 1;
  visibility: visible;
  transition: all .3s;
}

.right-window-content {
  transform: translateX(100%);
  transition: all .3s;
}

.right-window-content-active {
  transform: translateX(0);
  transition: all .3s;
}
</style>