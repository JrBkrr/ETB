<template>
  <!--begin::Dashboard-->
  <div class="row g-5 g-xl-8 mb-5 mb-xl-0">
    <div class="col-xl-4">
      <StatisticsWidget5
          widget-classes="card-xl-stretch mb-xl-8"
          icon-name="basket"
          color="body-white"
          icon-color="primary"
          title="Payment"
          description="Payment ile ilgili veriler"
      />
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
          widget-classes="card-xl-stretch mb-xl-8"
          icon-name="element-11"
          color="primary"
          icon-color="white"
          title="Departmanlar"
          description="Departmanlar ile ilgili veriler"
      />
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
          widget-classes="card-xl-stretch mb-xl-8"
          icon-name="plus"
          color="dark"
          icon-color="gray-100"
          title="Diğer alınacak aksiyonlar"
          description="Diğer alınacak aksiyonlar açıklama"
      />
    </div>
  </div>
  <div class="row g-5 g-xl-8 mb-5 mb-xl-0">
    <!--begin::Col-->
    <div class="col-12 col-xl-6">
      <Card
          widget-classes="card-xl-stretch mb-xl-8"
          chart-color="warning"
          chart-height="150"
          title="Bugün Kullanılan Cihaz"
          :description="State.Dashboard.usedDevicesCountToday"
          :data="State.Dashboard.usedDevicesCountToday"
      ></Card>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-12 col-xl-6">
      <Card
          widget-classes="card-xl-stretch mb-xl-8"
          chart-color="danger"
          chart-height="150"
          title="Rol Doğrulaması Toplam"
          :description="State.Dashboard.totalRoleVerificationCount"
          :data="State.Dashboard.totalRoleVerificationCount"
      ></Card>
    </div>
  </div>
  <div class="row g-5 g-xl-8 mb-5 mb-xl-0">

    <!--begin::Row-->

      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-12 col-xl-3 ">
        <ChartDonut
            widget-classes="card-xl-stretch mb-xl-8"
            chart-color="primary"
            chart-height="100"
            btn-color="primary"
            title="Kayıtlı Cihazlar"
            :description="State.Dashboard.registeredDevicesCount"
            :labelsColor="['primary','success']"
            data="registeredDevicesCount"
            :labels="['Online','Offline']"
        ></ChartDonut>
      </div>
      <!--end::Col-->

      <!--begin::Col-->
      <div class="col-12 col-xl-3 ">
        <ChartDonut
            widget-classes="card-xl-stretch mb-xl-8"
            chart-color="primary"
            chart-height="100"
            btn-color="primary"
            title="Toplam Kimlik Doğrulama"
            :description="State.Dashboard.totalRoleVerificationCount"
            :labelsColor="['info','warning']"
            data="totalRoleVerificationCount"
            :labels="['Successful','Unsuccessful']"
        ></ChartDonut>
      </div>
      <!--end::Col-->

      <!--begin::Col-->
      <div class="col-12 col-xl-3 ">
        <ChartDonut
            widget-classes="card-xl-stretch mb-xl-8"
            chart-color="primary"
            chart-height="100"
            btn-color="primary"
            title="Kimlik Doğrulama Bugün"
            :description="State.Dashboard.totalVerificationCountToday"
            :labelsColor="['dark','danger']"
            data="totalVerificationCountToday"
            :labels="['Successful','Unsuccessful']"
        ></ChartDonut>
      </div>
      <!--end::Col-->

      <!--begin::Col-->
      <div class="col-12 col-xl-3 ">
        <ChartDonut
            widget-classes="card-xl-stretch mb-xl-8"
            chart-color="primary"
            chart-height="100"
            btn-color="primary"
            title="Parmak İzi Doğrulama"
            :description="State.Dashboard.fingerPrintSuccessRate"
            :labelsColor="['info','success']"
            data="fingerPrintSuccessRate"
            :labels="['Successful','Unsuccessful']"
        ></ChartDonut>
      </div>
      <!--end::Col-->

    <!--end::Row-->
  </div>
  <div class="row g-5 g-xl-8 mb-5 mb-xl-0">
    <div class="col-12 col-xl-4">
      <div class="card-xl-stretch mb-xl-8">
        <!--begin::Contacts-->
        <div class="card card-flush ">
          <!--begin::Card header-->
          <div class="card-header align-items-center border-0 mt-4">
            <h3 class="card-title align-items-start flex-column">
              <span class="fw-bold mb-2 text-dark">Çevrimiçi Cihazlar</span>
              <span class="text-muted fw-semobold fs-7">56 Online</span>
            </h3>
          </div>
          <!--end::Card header-->

          <!--begin::Card body-->
          <div v-if="State.Devices.length > 0" class="card-body ">
            <!--begin::List-->
            <div
                class="scroll-y me-n5 pe-5 vh-50"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
                data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
                data-kt-scroll-offset="0px"
            >
              <template v-for="(item, index) in State.Devices.filter(a => !a.online)" :key="index">
                <div class="d-flex flex-stack py-4">
                  <!--begin::Details-->
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-45px symbol-circle">
                      <img v-if="false" :src="item.image" alt=""/>
                      <span
                          v-else
                          :class="`bg-light-${State.Variables[index]} text-${State.Variables[index]}`"
                          class="symbol-label fs-6 fw-bold"
                      >{{ item.serialNumber.charAt(0) }}</span
                      >
                      <div
                          v-if="!item.online"
                          class="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"
                      ></div>
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Details-->
                    <div class="ms-5">
                      <a
                          href="#"
                          class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                      >{{ item.serialNumber }}</a
                      >
                      <div class="fw-semobold text-gray-400">
                        {{ item.email }}
                      </div>
                    </div>
                    <!--end::Details-->
                  </div>
                  <!--end::Details-->

                  <!--begin::Lat seen-->
                  <div class="d-flex flex-column align-items-end ms-2">
                    <span class="text-muted fs-7 mb-1">{{ moment(item.lastOnlineTime).format('hh:mm') }}</span>
                  </div>
                  <!--end::Lat seen-->
                </div>
              </template>
            </div>
            <!--end::List-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Contacts-->
      </div>
    </div>

    <!--begin::Col-->
    <div class="col-12 col-xl-8">
      <ChartBar
          widget-classes="card-xl-stretch mb-xl-8"
          :height="400"
      ></ChartBar>
    </div>
    <!--end::Col-->

  </div>
  <div class="row g-5 g-xl-8 mb-5 mb-xl-0">
    <!--begin::Row-->
      <!--begin::Col-->
      <div class="col-12 col-xl-4 ">
        <LatestLogs widget-classes="card-xl-stretch h-100"></LatestLogs>
      </div>
      <!--end::Col-->
      <div class="col-xl-8">
        <Map class="card-xl-stretch h-100"/>
      </div>
    <!--end::Row-->
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import {GlobalStore} from "@/stores/global";
import Card from "@/components-ekds/dashboard/Card.vue";
import contacts from "@/core/data/contacts";
import LatestLogs from "@/components-ekds/dashboard/LatestLogs.vue";
import MixedWidget4 from "@/components/widgets/mixed/Widget4.vue";
import ChartDonut from "@/components-ekds/dashboard/ChartDonut.vue";
import ChartBar from "@/components-ekds/dashboard/ChartBar.vue";
import Map from "@/components/custom/Map.vue";
import moment from "moment";

export default defineComponent({
  name: "dashboard-main",
  computed: {
    moment() {
      return moment
    }
  },
  components: {
    Map,
    ChartBar,
    MixedWidget4,
    StatisticsWidget5,
    Card,
    LatestLogs,
    ChartDonut
  },
  setup() {
    const {Action_Start, State} = GlobalStore()

    onMounted(async () => {
      await Action_Start('get', 'statistics', 'Dashboard').then(Response => console.log(Response))
      await Action_Start('get', 'devices', 'Devices').then(Response => console.log(Response))
      const queryParams = {
        createdAtFromDateTime: '2021-06-24',
        createdAtToDateTime: '2023-09-24',
      };

      await Action_Start('query', 'logs', 'Logs', '', queryParams).then(Response => console.log(Response))
      Action_Start('get', `users/info/${localStorage.getItem('username')}`, 'Profile').then(Response => {
        localStorage.setItem('user', JSON.stringify(Response))
      })
    })
    
    return {
      State,
      contacts
    }
  }
});
</script>

<style>
.vh-50 {
  height: 45vh;
}
</style>
