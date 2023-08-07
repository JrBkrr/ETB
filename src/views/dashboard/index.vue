<template>
  <div class="overflow-auto h-100 px-10">
    <!--begin::Dashboard-->
    <div class="row g-5 g-xl-8 mb-5 mb-xl-0">
      <div class="d-flex flex-wrap col-xl-8">
        <!--begin::Col-->
        <div class="col-12 col-xl-6 mb-8 mb-xl-0 pe-xl-4">
          <Card
              :data="State.Dashboard.registeredDevicesCount"
              :description="State.Dashboard.registeredDevicesCount"
              chart-color="danger"
              chart-height="150"
              title="Kayıtlı Cihazlar"
              widget-classes="card-xl-stretch mb-xl-8"
          ></Card>
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-12 col-xl-6 mb-8 mb-xl-0 ps-xl-4">
          <Card
              :data="State.Dashboard.usedDevicesCountToday"
              :description="State.Dashboard.usedDevicesCountToday"
              chart-color="warning"
              chart-height="150"
              title="Bugün Kullanılan Cihaz"
              widget-classes="card-xl-stretch mb-xl-8"
          ></Card>
        </div>
        <!--end::Col-->
        
        <!--begin::Col-->
        <div class="col-12 col-xl-6 mb-8 mb-xl-0 pe-xl-4">
          <Card
              :data="State.Dashboard.totalRoleVerificationCount"
              :description="State.Dashboard.totalRoleVerificationCount"
              chart-color="danger"
              chart-height="150"
              title="Rol Doğrulaması Toplam"
              widget-classes="card-xl-stretch mb-xl-8"
          ></Card>
        </div>
        <!--end::Col-->
        
        <!--begin::Col-->
        <div class="col-12 col-xl-6 mb-8 mb-xl-0 ps-xl-4">
          <Card
              :data="State.Dashboard.totalRoleVerificationCountToday"
              :description="State.Dashboard.totalRoleVerificationCountToday"
              chart-color="danger"
              chart-height="150"
              title="Rol Doğrulama Bugün"
              widget-classes="card-xl-stretch mb-xl-8"
          ></Card>
        </div>
        <!--end::Col-->
      </div>
      
      <div class="d-flex flex-wrap col-xl-4">
        <router-link class="col-6 mb-8 mb-xl-0 pe-4" to="/verifications/all">
          <Card2 color="primary"
                 description="Departmanlar ile ilgili veriler"
                 icon-color="white"
                 icon-name="shield-fill-check"
                 title="Verifications"
                 widget-classes="card-xl-stretch mb-xl-8 bg-opacity-75" />
        </router-link>
        <router-link class="col-6 mb-8 mb-xl-0 ps-4" to="/settings">
          <Card2 color="warning"
                 description="Departmanlar ile ilgili veriler"
                 icon-color="white"
                 icon-name="gear-fill"
                 title="Settings"
                 widget-classes="card-xl-stretch mb-xl-8 bg-opacity-75" />
        </router-link>
        <router-link class="col-6 mb-8 mb-xl-0 pe-4" to="/user-management">
          <Card2 color="danger"
                 description="Departmanlar ile ilgili veriler"
                 icon-color="white"
                 icon-name="person-fill"
                 title="Users"
                 widget-classes="card-xl-stretch mb-xl-8 bg-opacity-75" />
        </router-link>
        <router-link class="col-6 mb-8 mb-xl-0 ps-4" to="/versions">
          <Card2 color="success"
                 description="Departmanlar ile ilgili veriler"
                 icon-color="white"
                 icon-name="lightning-fill"
                 title="Versions"
                 widget-classes="card-xl-stretch mb-xl-8 bg-opacity-75" />
        </router-link>
      </div>
    
    </div>
    
    <div class="row g-5 g-xl-8 mb-5 mb-xl-0">
      
      <!--begin::Col-->
      <div class="col-12 col-xl-3 ">
        <ChartDonut
            :description="State.Dashboard.totalVerificationCountToday"
            :labels="['Successful','Unsuccessful']"
            :labelsColor="['primary','danger']"
            btn-color="primary"
            chart-color="primary"
            chart-height="100"
            data="totalVerificationCountToday"
            title="Kimlik Doğrulama Bugün"
            widget-classes="card-xl-stretch mb-8"
        ></ChartDonut>
      </div>
      <!--end::Col-->
      
      <!--begin::Col-->
      <div class="col-12 col-xl-3 ">
        <ChartDonut
            :description="State.Dashboard.fingerPrintSuccessRate"
            :labels="['Successful','Unsuccessful']"
            :labelsColor="['info','success']"
            btn-color="primary"
            chart-color="primary"
            chart-height="100"
            data="fingerPrintSuccessRate"
            title="Parmak İzi Doğrulama"
            widget-classes="card-xl-stretch mb-8"
        ></ChartDonut>
      </div>
      <!--end::Col-->
      
      <!--begin::Col-->
      <div class="col-xl-6">
        <Map class="card-xl-stretch" />
      </div>
      <!--end::Row-->
    </div>
    
    <div class="row g-5 g-xl-8 mb-5 mb-xl-0">
      
      <!--begin::Col-->
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
                  class="scroll-y me-n5 pe-5 vh-45"
                  data-kt-scroll="true"
                  data-kt-scroll-activate="{default: false, lg: true}"
                  data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
                  data-kt-scroll-max-height="auto"
                  data-kt-scroll-offset="0px"
                  data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
              >
                <template v-for="(item, index) in State.Devices.filter(a => !a.online)" :key="index">
                  <div class="d-flex flex-stack py-4">
                    <!--begin::Details-->
                    <div class="d-flex align-items-center">
                      <!--begin::Avatar-->
                      <div class="symbol symbol-45px symbol-circle">
                        <img v-if="false" :src="item.image" alt="" />
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
                            class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            href="#"
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
      <!--end::Col-->
      
      <!--begin::Col-->
      <div class="col-12 col-xl-4">
        <ChartBar
            :height="400"
            widget-classes="card-xl-stretch mb-xl-8"
        ></ChartBar>
      </div>
      <!--end::Col-->
      
      <!--begin::Col-->
      <div class="col-12 col-xl-4">
        <LatestLogs widget-classes="card-xl-stretch "></LatestLogs>
      </div>
      <!--end::Col-->
    </div>
    
    <!--begin::Dashboard-->
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
import Card2 from "@/components-ekds/dashboard/Card2.vue";

export default defineComponent({
  name: "dashboard-main",
  computed: {
    moment() {
      return moment
    }
  },
  components: {
    Card2,
    Map,
    ChartBar,
    MixedWidget4,
    StatisticsWidget5,
    Card,
    LatestLogs,
    ChartDonut
  },
  setup() {
    const {State} = GlobalStore()
    
    
    return {
      State,
      contacts
    }
  }
});
</script>