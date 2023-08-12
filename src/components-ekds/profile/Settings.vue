<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
        aria-controls="kt_account_profile_details"
        aria-expanded="true"
        class="card-header border-0 cursor-pointer"
        data-bs-target="#kt_account_profile_details"
        data-bs-toggle="collapse"
        role="button"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Profile Details</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->
    
    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
      <VForm
          id="kt_account_profile_details_form"
          :validation-schema="profileDetailsValidator"
          class="form"
          novalidate
          @submit="saveChanges1()"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6"
            >Full Name</label
            >
            <!--end::Label-->
            
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-6 fv-row">
                  <Field
                      v-model="profileDetails.name"
                      class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      name="fname"
                      placeholder="First name"
                      type="text"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="fname" />
                    </div>
                  </div>
                </div>
                <!--end::Col-->
                
                <!--begin::Col-->
                <div class="col-lg-6 fv-row">
                  <Field
                      v-model="profileDetails.surname"
                      class="form-control form-control-lg form-control-solid"
                      name="lname"
                      placeholder="Last name"
                      type="text"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="lname" />
                    </div>
                  </div>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6"
            >Username</label
            >
            <!--end::Label-->
            
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                  v-model="profileDetails.username"
                  class="form-control form-control-lg form-control-solid"
                  name="username"
                  placeholder="Username"
                  type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="username" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6"
            >Email</label
            >
            <!--end::Label-->
            
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                  v-model="profileDetails.email"
                  class="form-control form-control-lg form-control-solid"
                  name="email"
                  placeholder="Email"
                  type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semobold fs-6"
            >Phone Number</label
            >
            <!--end::Label-->
            
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                  v-model="profileDetails.phoneNumber"
                  class="form-control form-control-lg form-control-solid"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phoneNumber" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
        
        </div>
        <!--end::Card body-->
        
        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
              class="btn btn-light btn-active-light-primary me-2"
              type="reset"
          >
            Discard
          </button>
          
          <button
              id="kt_account_profile_details_submit"
              ref="submitButton1"
              class="btn btn-primary"
              type="submit"
          >
            <span class="indicator-label"> Save Changes </span>
            <span class="indicator-progress">
              Please wait...
              <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Actions-->
      </VForm>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Basic info-->
  
  <!--begin::Sign-in Method-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
        class="card-header border-0 cursor-pointer"
        data-bs-target="#kt_account_signin_method"
        data-bs-toggle="collapse"
        role="button"
    >
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Sign-in Method</h3>
      </div>
    </div>
    <!--end::Card header-->
    
    <!--begin::Content-->
    <div id="kt_account_signin_method" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <!--begin::Email Address-->
        <div class="d-flex flex-wrap align-items-center mb-8">
          <div id="kt_signin_email" :class="{ 'd-none': emailFormDisplay }">
            <div class="fs-4 fw-bolder mb-1">Email Address</div>
            <div class="fs-6 fw-semobold text-gray-600">
              {{ profileDetails.email }}
            </div>
          </div>
          
          <div
              id="kt_signin_email_edit"
              :class="{ 'd-none': !emailFormDisplay }"
              class="flex-row-fluid"
          >
            <!--begin::Form-->
            <VForm
                id="kt_signin_change_email"
                :validation-schema="changeEmail"
                class="form"
                novalidate
                @submit="updateEmail()"
            >
              <div class="row mb-6">
                <div class="col-lg-6 mb-4 mb-lg-0">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bold mb-3"
                        for="emailaddress"
                    >Enter New Email Address</label
                    >
                    <Field
                        id="emailaddress"
                        v-model="profileDetails.email"
                        class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                        name="emailaddress"
                        placeholder="Email Address"
                        type="email"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="emailaddress" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bold mb-3"
                        for="confirmemailpassword"
                    >Confirm Password</label
                    >
                    <Field
                        id="confirmemailpassword"
                        class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                        name="confirmemailpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="confirmemailpassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button
                    id="kt_signin_submit"
                    ref="updateEmailButton"
                    class="btn btn-primary me-2 px-6"
                    type="submit"
                >
                  <span class="indicator-label"> Update Email </span>
                  <span class="indicator-progress">
                    Please wait...
                    <span
                        class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                    id="kt_signin_cancel"
                    class="btn btn-color-gray-400 btn-active-light-primary px-6"
                    type="button"
                    @click="emailFormDisplay = !emailFormDisplay"
                >
                  Cancel
                </button>
              </div>
            </VForm>
            <!--end::Form-->
          </div>
          <div
              id="kt_signin_email_button"
              :class="{ 'd-none': emailFormDisplay }"
              class="ms-auto"
          >
            <button
                class="btn btn-light fw-bolder px-6"
                @click="emailFormDisplay = !emailFormDisplay"
            >
              Change Email
            </button>
          </div>
        </div>
        <!--end::Email Address-->
        
        <!--begin::Password-->
        <div class="d-flex flex-wrap align-items-center mb-8">
          <div
              id="kt_signin_password"
              :class="{ 'd-none': passwordFormDisplay }"
          >
            <div class="fs-4 fw-bolder mb-1">Password</div>
            <div class="fs-6 fw-semobold text-gray-600">************</div>
          </div>
          <div
              id="kt_signin_password_edit"
              :class="{ 'd-none': !passwordFormDisplay }"
              class="flex-row-fluid"
          >
            <div class="fs-6 fw-semobold text-gray-600 mb-4">
              Password must be at least 8 character and contain symbols
            </div>
            
            <!--begin::Form-->
            <VForm
                id="kt_signin_change_password"
                :validation-schema="changePassword"
                class="form"
                novalidate
                @submit="updatePassword()"
            >
              <div class="row mb-6">
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bold mb-3"
                        for="currentpassword"
                    >Current Password</label
                    >
                    <Field
                        id="currentpassword"
                        class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                        name="currentpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="currentpassword" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bold mb-3"
                        for="newpassword"
                    >New Password</label
                    >
                    <Field
                        id="newpassword"
                        class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                        name="newpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="newpassword" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bold mb-3"
                        for="confirmpassword"
                    >Confirm New Password</label
                    >
                    <Field
                        id="confirmpassword"
                        class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                        name="confirmpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="confirmpassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button
                    id="kt_password_submit"
                    ref="updatePasswordButton"
                    class="btn btn-primary me-2 px-6"
                    type="submit"
                >
                  <span class="indicator-label"> Update Password </span>
                  <span class="indicator-progress">
                    Please wait...
                    <span
                        class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                    id="kt_password_cancel"
                    class="btn btn-color-gray-400 btn-active-light-primary px-6"
                    type="button"
                    @click="passwordFormDisplay = !passwordFormDisplay"
                >
                  Cancel
                </button>
              </div>
            </VForm>
            <!--end::Form-->
          </div>
          <div
              id="kt_signin_password_button"
              :class="{ 'd-none': passwordFormDisplay }"
              class="ms-auto"
          >
            <button
                class="btn btn-light fw-bolder"
                @click="passwordFormDisplay = !passwordFormDisplay"
            >
              Reset Password
            </button>
          </div>
        </div>
        <!--end::Password-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Sign-in Method-->

</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import {ErrorMessage, Field, Form as VForm} from "vee-validate";
import * as Yup from "yup";
import {GlobalStore} from "@/stores/global";
import {useI18n} from "vue-i18n";

interface ProfileDetails {
  id: string;
  username: string;
  password: null | string;
  passwordRepeat: null | string;
  email: string;
  phoneNumber: string;
  name: string;
  surname: string;
  enabled: boolean;
  createdAt: string;
  authorities: Authority[];
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  _links: {
    self: {
      href: string;
    };
    users: {
      href: string;
    };
  };
}

interface Authority {
  id: string;
  name: string;
  authority: string;
}


export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const {State, Action_Start} = GlobalStore()
    const submitButton1 = ref<HTMLElement | null>(null);
    const updateEmailButton = ref<HTMLElement | null>(null);
    const updatePasswordButton = ref<HTMLElement | null>(null);
    
    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);
    
    const {t, te} = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    
    const profileDetails = ref<ProfileDetails>({
      id: '',
      username: '',
      password: '',
      passwordRepeat: '',
      email: '',
      phoneNumber: '',
      name: '',
      surname: '',
      enabled: false,
      createdAt: '',
      authorities: [],
      accountNonExpired: false,
      credentialsNonExpired: false,
      accountNonLocked: false,
      _links: {
        self: {
          href: '',
        },
        users: {
          href: '',
        },
      },
    });
    
    const profileDetailsValidator = Yup.object().shape({
      // fname: Yup.string().required().label("First name"),
      // lname: Yup.string().required().label("Last name"),
      // username: Yup.string().required().label("Username"),
      // email: Yup.string().required().label("Email"),
      // phoneNumber: Yup.string().required().label("Phone Number"),
      // enabled: Yup.string().required().label("Enabled"),
    });
    
    const changeEmail = Yup.object().shape({
      emailaddress: Yup.string().required().email().label("Email"),
      confirmemailpassword: Yup.string().required().label("Password"),
    });
    
    const changePassword = Yup.object().shape({
      currentpassword: Yup.string().required().label("Current password"),
      newpassword: Yup.string().min(4).required().label("Password"),
      confirmpassword: Yup.string()
          .min(4)
          .required()
          .oneOf([Yup.ref("newpassword"), null], "Passwords must match")
          .label("Password Confirmation"),
    });
    
    const UpdateUser = async () => {
      await Action_Start('put', 'users/update', '', profileDetails.value)
          .then(async Response => {
            setTimeout(() => {
              State.Notifications.push({head: 'İşlem Başarılı', title: `${translate('userName')}: ${profileDetails.value.username}`, variant: 'success', status: false})
              submitButton1.value?.removeAttribute("data-kt-indicator");
            }, 500);
            Action_Start('get', `users/info/${localStorage.getItem('username')}`, 'Profile').then(Response => {
              localStorage.setItem('user', JSON.stringify(Response))
            })
          }).catch(Error => {
            setTimeout(() => {
              if (submitButton1.value) {
                submitButton1.value?.removeAttribute("data-kt-indicator");
              }
            }, 500);
          })
    }
    const saveChanges1 = async () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        await UpdateUser()
      }
    };
    
    const updateEmail = async () => {
      if (updateEmailButton.value) {
        // Activate indicator
        updateEmailButton.value.setAttribute("data-kt-indicator", "on");
        await UpdateUser()
        
        setTimeout(() => {
          updateEmailButton.value?.removeAttribute("data-kt-indicator");
          emailFormDisplay.value = false;
        }, 2000);
      }
    };
    
    const updatePassword = async () => {
      if (updatePasswordButton.value) {
        // Activate indicator
        updatePasswordButton.value.setAttribute("data-kt-indicator", "on");
        await UpdateUser()
        setTimeout(() => {
          updatePasswordButton.value?.removeAttribute("data-kt-indicator");
          passwordFormDisplay.value = false;
        }, 1000);
      }
    };
    
    const GetLocalProfile = localStorage.getItem('user')
    
    const Profile = computed<ProfileDetails>(() => {
      if (Object.keys(State.Profile).length > 0) {
        return State.Profile;
      } else if (GetLocalProfile) {
        const localProfile = JSON.parse(GetLocalProfile);
        profileDetails.value.name = localProfile.name;
        return localProfile;
      } else {
        // router.push('sign-in');
        return null;
      }
    });
    
    onMounted(() => {
      console.log('Profile', Profile.value);
      profileDetails.value = {...profileDetails.value, ...Profile.value};
    });
    
    
    return {
      submitButton1,
      saveChanges1,
      profileDetails,
      emailFormDisplay,
      passwordFormDisplay,
      profileDetailsValidator,
      changeEmail,
      changePassword,
      updateEmailButton,
      updatePasswordButton,
      updateEmail,
      updatePassword,
      getAssetPath,
      Profile
    };
  },
});
</script>
