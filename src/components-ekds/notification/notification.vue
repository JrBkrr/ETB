<template>
  <div v-if="List.length > 0" class="position-fixed top-0 right-0 p-6 z-9999 max-vw-100">
    <div class="d-flex flex-column-reverse">
      <div v-for="(noti,index) in List"
           :class="`liner-${noti.variant} noti-${noti.status && 'active'}`"
           class="noti-passive position-relative bg-light-dark p-5 rounded min-w-300px max-w-100 w-100 shadow-notification overflow-hidden mb-5">
        <div class="position-relative z-index-2 d-flex align-items-center">
        <span class="d-flex align-items-center justify-content-center w-40px h-40px rounded-circle bg-dark bg-opacity-10 me-4">
         <i
             :class="`
             bi-${noti.variant === 'success' ? 'check' : noti.variant === 'primary' ? 'info' : noti.variant === 'danger' ? 'x' : noti.variant === 'purple' ? 'question' : 'exclamation'}
             bg-${noti.variant}
             `"
             class="bi d-flex align-items-center justify-content-center fs-2 text-light-dark w-25px h-25px rounded-circle "></i>
        </span>
          <div class="flex-1 overflow-hidden">
            <h5 class="fw-semibolds fs-6 m-0">{{ noti.head }}</h5>
            <p class="fs-7 m-0 text-gray-700">{{ noti.title }}</p>
            <p v-if="noti.subtitle" class="fs-7 m-0 text-gray-700">{{ noti.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import {GlobalStore} from "@/stores/global";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "notification",
  components: {},
  setup() {
    const {State} = GlobalStore();
    const {t, te} = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    
    const List = ref<any>([])
    
    async function AddNotification(item) {
      List.value.push(item)
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          List.value.find(a => {
            if (a.id === item.id) a.status = true
          })
          resolve()
        }, 100)
      });
      return item
    }
    
    async function RemoveNotification(item) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          List.value.find(a => {
            if (a.id === item.id) a.status = false
          })
          setTimeout(() => {
            List.value.splice(List.length - 1, 1);
            resolve()
          }, 400)
        }, 3000)
      });
      return item
    }
    
    watch(
        State.Notifications,
        async (NV, OV) => {
          await AddNotification({...NV[NV.length - 1], id: generateUniqueId()}).then(async Response => {
            await RemoveNotification(Response)
          })
        },
        {deep: true} // Derin izleme yapar, içerik değişikliklerini de algılar
    );
    
    // Benzersiz bir ID üretme fonksiyonu (Örneğin: UUID kullanabilirsiniz)
    function generateUniqueId() {
      return Math.random().toString(36).substr(2, 111);
    }
    
    return {
      List,
      State,
      translate
    }
  }
})
</script>

<style>
.noti-passive {
  opacity:    0;
  visibility: hidden;
  transform:  translateX(100%);
  transition: all .3s;
  }

.noti-active {
  opacity:    1;
  visibility: visible;
  transform:  translateX(0);
  transition: all .3s;
  }

.bg-purple {
  background-color: #9760f8;
  }

.liner-success:before {
  content:    '';
  position:   absolute;
  top:        0;
  left:       0;
  width:      100%;
  height:     100%;
  background: linear-gradient(90deg, rgba(7, 204, 10, 0.15) 0%, rgba(91, 221, 93, 0.05) 27%, rgba(255, 255, 255, 0) 100%);
  z-index:    1;
  }

.liner-danger:before {
  content:    '';
  position:   absolute;
  top:        0;
  left:       0;
  width:      100%;
  height:     100%;
  background: linear-gradient(90deg, rgba(204, 7, 83, 0.15) 0%, rgba(221, 91, 115, 0.05) 27%, rgba(255, 255, 255, 0) 100%);
  z-index:    1;
  }

.liner-warning:before {
  content:    '';
  position:   absolute;
  top:        0;
  left:       0;
  width:      100%;
  height:     100%;
  background: linear-gradient(90deg, rgba(204, 135, 7, 0.15) 0%, rgba(221, 210, 91, 0.05) 27%, rgba(255, 255, 255, 0) 100%);
  z-index:    1;
  }

.liner-primary:before {
  content:    '';
  position:   absolute;
  top:        0;
  left:       0;
  width:      100%;
  height:     100%;
  background: linear-gradient(90deg, rgba(7, 168, 204, 0.15) 0%, rgba(91, 171, 221, 0.05) 27%, rgba(255, 255, 255, 0) 100%);
  z-index:    1;
  }

.liner-purple:before {
  content:    '';
  position:   absolute;
  top:        0;
  left:       0;
  width:      100%;
  height:     100%;
  background: linear-gradient(90deg, rgba(151, 96, 248, 0.15) 0%, rgba(151, 96, 248, 0.05) 27%, rgba(255, 255, 255, 0) 100%);
  z-index:    1;
  }
</style>