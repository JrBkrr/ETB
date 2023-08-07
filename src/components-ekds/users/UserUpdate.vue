<template>
  <!--begin::Modal - New Address-->
  <div
      id="kt_modal_update_user"
      ref="newAddressModalRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Form-->
        <VForm
            id="kt_modal_new_device_form"
            v-slot="{ errors }"
            :validation-schema="validationSchema"
            class="form"
            @submit="submit"
        >
          <!--begin::Modal header-->
          <div id="kt_modal_new_device_header" class="modal-header">
            <!--begin::Modal title-->
            <h2>Add New Device</h2>
            <!--end::Modal title-->
            
            <!--begin::Close-->
            <div
                class="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
            >
              <KTIcon icon-class="fs-1" icon-name="cross" />
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
                id="kt_modal_new_device_scroll"
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_new_device_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_new_device_scroll"
            >
              <!--begin::Notice-->
              <div v-if="false"
                   class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                <KTIcon icon-class="fs-2tx text-warning me-4" icon-name="information-5" />
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack flex-grow-1">
                  <!--begin::Content-->
                  <div class="fw-semobold">
                    <h4 class="text-gray-800 fw-bold">Warning</h4>
                    <div class="fs-6 text-gray-600">
                      Updating address may affter to your
                      <a href="#">Tax Location</a>
                    </div>
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Notice-->
              
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2"
                  >username</label
                  >
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <Field
                      v-model="payload.username"
                      :class="errors.username ? 'is-invalid' : ''"
                      class="form-control"
                      name="username"
                      placeholder=""
                      type="text"
                  />
                  <ErrorMessage class="invalid-feedback" name="username" />
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2"
                  >email</label
                  >
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <Field
                      v-model="payload.email"
                      :class="errors.email ? 'is-invalid' : ''"
                      class="form-control"
                      name="email"
                      placeholder=""
                      type="text"
                  />
                  <ErrorMessage class="invalid-feedback" name="email" />
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2"
                  >phoneNumber</label
                  >
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <Field
                      v-model="payload.phoneNumber"
                      :class="errors.phoneNumber ? 'is-invalid' : ''"
                      class="form-control"
                      name="phoneNumber"
                      placeholder=""
                      type="text"
                  />
                  <ErrorMessage class="invalid-feedback" name="phoneNumber" />
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2"
                  >name</label
                  >
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <Field
                      v-model="payload.name"
                      :class="errors.name ? 'is-invalid' : ''"
                      class="form-control"
                      name="name"
                      placeholder=""
                      type="text"
                  />
                  <ErrorMessage class="invalid-feedback" name="name" />
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2"
                  >surname</label
                  >
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <Field
                      v-model="payload.surname"
                      :class="errors.surname ? 'is-invalid' : ''"
                      class="form-control"
                      name="surname"
                      placeholder=""
                      type="text"
                  />
                  <ErrorMessage class="invalid-feedback" name="surname" />
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2"
                  >password</label
                  >
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <Field
                      v-model="payload.password"
                      :class="errors.password ? 'is-invalid' : ''"
                      class="form-control"
                      name="password"
                      placeholder=""
                      type="text"
                  />
                  <ErrorMessage class="invalid-feedback" name="password" />
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2"
                  >passwordRepeat</label
                  >
                  <!--end::Label-->
                  
                  <!--begin::Input-->
                  <Field
                      v-model="payload.passwordRepeat"
                      :class="errors.passwordRepeat ? 'is-invalid' : ''"
                      class="form-control"
                      name="passwordRepeat"
                      placeholder=""
                      type="text"
                  />
                  <ErrorMessage class="invalid-feedback" name="passwordRepeat" />
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              
              <div class="d-flex flex-stack mb-8">
                <!--begin::Label-->
                <div class="me-5">
                  <label class="fs-6 fw-semobold"
                  >Adding Users by Team Members</label
                  >
                  
                  <div class="fs-7 fw-semobold text-gray-400">
                    If you need more info, please check budget planning
                  </div>
                </div>
                <!--end::Label-->
                
                <!--begin::Switch-->
                <label
                    class="form-check form-switch form-check-custom form-check-solid"
                >
                  <input
                      id="update-uss"
                      v-model="payload.enabled"
                      class="form-check-input"
                      type="checkbox"
                  />
                  <span class="form-check-label fw-semobold text-gray-400">
                  Allowed
                </span>
                </label>
                <!--end::Switch-->
              </div>
              
              <div class="col d-inline-flex flex-wrap">
                <div v-for="auth in RoleList" :key="`${auth.name}`" class="col-4 col-md-3 d-flex align-items-center cursor-pointer pb-3"
                     @click="SetAuth(auth)">
                    <span class="d-flex align-items-center justify-content-center bg-light rounded p-3 me-3">
                       <KTIcon :icon-class="`fs-1 ${payload.authorities?.some(a => a.id === auth.id) ? 'text-primary' : 'text-gray'}`"
                               :icon-name="RoleIcon(auth.id).icon" />
                    </span>
                  <span>{{ RoleIcon(auth.id).name }}</span>
                </div>
              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->
          
          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
                id="kt_modal_new_device_cancel"
                class="btn btn-light me-3"
                type="reset"
            >
              Discard
            </button>
            <!--end::Button-->
            
            <!--begin::Button-->
            <button
                id="kt_modal_new_device_submit"
                ref="submitButtonRef"
                class="btn btn-primary"
                type="submit"
            >
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </VForm>
        <!--end::Form-->
      </div>
    </div>
  </div>
  <!--end::Modal - New Address-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, onMounted, ref, watch} from "vue";
import {ErrorMessage, Field, Form as VForm} from "vee-validate";
import {hideModal} from "@/core/helpers/dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import {countries} from "@/core/data/countries";
import {GlobalStore} from "@/stores/global";
import {useI18n} from "vue-i18n";

interface Auth {
  "id": string,
  "name": string,
  "authority": string
}

interface User {
  "id": string;
  "username": string;
  "password": string,
  "passwordRepeat": string,
  "email": string,
  "phoneNumber": string,
  "name": string,
  "surname": string,
  "enabled": boolean,
  "authorities": Auth[]
}

export default defineComponent({
  name: "new-address-modal",
  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {t, te} = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const {Action_Start, Errors, State} = GlobalStore()
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newAddressModalRef = ref<null | HTMLElement>(null);
    const userID = ref('')
    
    const payload = ref<User>({
      "id": props.item.id,
      "username": props.item.username,
      "password": props.item.password,
      "passwordRepeat": props.item.passwordRepeat,
      "email": props.item.email,
      "phoneNumber": props.item.phoneNumber,
      "name": props.item.name,
      "surname": props.item.surname,
      "enabled": props.item.enabled,
      "authorities": props.item.authorities,
    });
    
    const validationSchema = Yup.object().shape({
      username: Yup.string().min(4).required().label("username"),
      password: Yup.string().min(4).nullable().label("password"),
      passwordRepeat: Yup.string().min(4).nullable().label("passwordRepeat"),
      email: Yup.string().min(4).required().label("email"),
      phoneNumber: Yup.string().min(4).required().label("phoneNumber"),
      name: Yup.string().required().min(4).label("name"),
      surname: Yup.string().min(4).required().label("surname"),
    });
    
    watch(payload, async (NV, OV) => {
      userID.value = NV.id
    }, {deep: true})
    
    watch(userID, async (NV, OV) => {
      if (NV !== OV) {
        await Action_Start('get', `users/${NV}`, '').then(Response => {
          payload.value.authorities = Response.authorities
        })
      }
    }, {deep: true})
    
    const RoleList = [
      {
        "id": "ROLE_ADMIN",
        "name": "ROLE_ADMIN",
        "authority": "ROLE_ADMIN"
      },
      {
        "id": "ROLE_DEVELOPER",
        "name": "ROLE_DEVELOPER",
        "authority": "ROLE_DEVELOPER"
      },
      {
        "id": "ROLE_DEVICE",
        "name": "ROLE_DEVICE",
        "authority": "ROLE_DEVICE"
      },
      {
        "id": "ROLE_I18N",
        "name": "ROLE_I18N",
        "authority": "ROLE_I18N"
      },
      {
        "id": "ROLE_LOG",
        "name": "ROLE_LOG",
        "authority": "ROLE_LOG"
      },
      {
        "id": "ROLE_SETTING",
        "name": "ROLE_SETTING",
        "authority": "ROLE_SETTING"
      },
      {
        "id": "ROLE_USER",
        "name": "ROLE_USER",
        "authority": "ROLE_USER"
      },
      {
        "id": "ROLE_VERIFICATION",
        "name": "ROLE_VERIFICATION",
        "authority": "ROLE_VERIFICATION"
      },
      {
        "id": "ROLE_VERSION",
        "name": "ROLE_VERSION",
        "authority": "ROLE_VERSION"
      },
      {
        "id": "USER_READ",
        "name": "USER_READ",
        "authority": "USER_READ"
      },
      {
        "id": "USER_WRITE",
        "name": "USER_WRITE",
        "authority": "USER_WRITE"
      }
    ]
    const RoleIcon = (role) => {
      switch (role) {
        case "ROLE_ADMIN":
          return {name: 'admin', icon: "abstract-22"};
        case "ROLE_DEVELOPER":
          return {name: 'developer', icon: "android"};
        case "ROLE_DEVICE":
          return {name: 'device', icon: "monitor-mobile"};
        case "ROLE_I18N":
          return {name: 'language', icon: "text-italic"};
        case "ROLE_LOG":
          return {name: 'log', icon: "scroll"};
        case "ROLE_SETTING":
          return {name: 'setting', icon: "setting-3"};
        case "ROLE_USER":
          return {name: 'user', icon: "user"};
        case "ROLE_VERIFICATION":
          return {name: 'verification', icon: "verify"};
        case "ROLE_VERSION":
          return {name: 'version', icon: "data"};
        case "USER_READ":
          return {name: 'read', icon: "text-align-left"};
        case "USER_WRITE":
          return {name: 'write', icon: "pencil"};
        default:
          return {name: 'default', icon: "DEFAULT_ICON"};
      }
    };
    
    const SetAuth = (auth) => {
      const findAuth = payload.value.authorities.findIndex(a => a.id === auth.id)
      console.log(findAuth)
      if (findAuth !== -1) {
        payload.value.authorities.splice(findAuth, 1)
      } else {
        payload.value.authorities.push(auth)
      }
    }
    const submit = async () => {
      if (!submitButtonRef.value) {
        return;
      }
      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");
      await Action_Start('put', 'users/update', '', payload.value)
          .then(async Response => {
            setTimeout(() => {
              
              State.Notifications.push({head: 'İşlem Başarılı', title: `${translate('userName')}: ${payload.value.username}`, variant: 'success', status: false})
              hideModal(newAddressModalRef.value);
            }, 500);
            await Action_Start('get', 'users', 'Users')
          }).catch(Error => {
            setTimeout(() => {
              if (submitButtonRef.value) {
                submitButtonRef.value.disabled = false;
                submitButtonRef.value?.removeAttribute("data-kt-indicator");
              }
            }, 500);
          })
    };
    
    watch(
        () => props.item,
        (newItem) => {
          if (newItem) {
            payload.value.id = newItem.id;
            payload.value.username = newItem.username;
            payload.value.password = newItem.password;
            payload.value.passwordRepeat = newItem.passwordRepeat;
            payload.value.email = newItem.email;
            payload.value.phoneNumber = newItem.phoneNumber;
            payload.value.name = newItem.name;
            payload.value.surname = newItem.surname;
            payload.value.enabled = newItem.enabled;
            payload.value.authorities = newItem.authorities || [];
          }
        }
    );
    return {
      payload,
      validationSchema,
      submit,
      submitButtonRef,
      newAddressModalRef,
      getAssetPath,
      countries,
      RoleIcon,
      RoleList,
      SetAuth,
    };
  },
});
</script>
