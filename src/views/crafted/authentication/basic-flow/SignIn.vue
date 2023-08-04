<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
        class="form w-100"
        id="kt_login_signin_form"
        @submit="onSubmitLogin"
        :validation-schema="login"
        :initial-values="{ username: '', password: '' }"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">Sign In</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-semobold fs-4 d-none">
          New Here?

          <router-link to="/sign-up" class="link-primary fw-bold">
            Create an Account
          </router-link>
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <div class="mb-10 bg-light-info p-8 rounded d-none">
        <div class="text-info">
          Use account <strong>admin@demo.com</strong> and password
          <strong>demo</strong> to continue.
        </div>
      </div>

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-dark">User Name</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
            tabindex="1"
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="username"
            autocomplete="off"
            v-model="username"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bold text-dark fs-6 mb-0">Password</label>
          <!--end::Label-->

          <!--begin::Link-->
          <router-link to="/password-reset" class="link-primary fs-6 fw-bold">
            Forgot Password ?
          </router-link>
          <!--end::Link-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <Field
            tabindex="2"
            class="form-control form-control-lg form-control-solid"
            type="password"
            name="password"
            autocomplete="off"
            v-model="password"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--      <div class="fv-row mb-10">-->
      <!--        &lt;!&ndash;begin::Wrapper&ndash;&gt;-->
      <!--        <div class="d-flex flex-stack mb-2">-->
      <!--          &lt;!&ndash;begin::Label&ndash;&gt;-->
      <!--          <label class="form-label fw-bold text-dark fs-6 mb-0">Token</label>-->
      <!--          &lt;!&ndash;end::Label&ndash;&gt;-->
      <!--        </div>-->
      <!--        &lt;!&ndash;end::Wrapper&ndash;&gt;-->

      <!--        &lt;!&ndash;begin::Input&ndash;&gt;-->
      <!--        <Field-->
      <!--            tabindex="2"-->
      <!--            class="form-control form-control-lg form-control-solid"-->
      <!--            type="text"-->
      <!--            name="api_token"-->
      <!--            autocomplete="off"-->
      <!--        />-->

      <!--      </div>-->
      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button
            tabindex="3"
            type="submit"
            ref="submitButton"
            id="kt_sign_in_submit"
            class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Continue </span>

          <span class="indicator-progress">
            Please wait...
            <span
                class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Submit button-->

        <!--begin::Separator-->
        <div class="text-center text-muted text-uppercase fw-bold mb-5 d-none">or</div>
        <!--end::Separator-->

        <!--begin::Google link-->
        <a
            href="#"
            class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5 d-none"
        >
          <img
              alt="Logo"
              :src="getAssetPath('media/svg/brand-logos/google-icon.svg')"
              class="h-20px me-3"
          />
          Continue with Google
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a
            href="#"
            class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5 d-none"
        >
          <img
              alt="Logo"
              :src="getAssetPath('media/svg/brand-logos/facebook-4.svg')"
              class="h-20px me-3"
          />
          Continue with Facebook
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100 d-none">
          <img
              alt="Logo"
              :src="getAssetPath('media/svg/brand-logos/apple-black.svg')"
              class="h-20px me-3"
          />
          Continue with Apple
        </a>
        <!--end::Google link-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, ref} from "vue";
import {ErrorMessage, Field, Form as VForm} from "vee-validate";
import {useAuthStore, type User} from "@/stores/auth";
import {useRouter} from "vue-router";
import Swal from "sweetalert2";
import * as Yup from "yup";
import JwtService from "@/core/services/JwtService";
import {GlobalStore} from "@/stores/global";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const {Action_Start} = GlobalStore()
    const router = useRouter();
    const username = ref('admin')
    const password = ref('pass')
    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      username: Yup.string().min(3).required().label("User Name"),
      password: Yup.string().min(4).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic YWRtaW46c2VjcmV0");

      fetch(`https://78.187.121.71:8000/oauth/token?grant_type=password&username=${username.value}&password=${password.value}&tenant_id=d391351c-33b2-416a-92e1-748e2c4e7102`, {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      })
          .then(response => response.text())
          .then(async result => {
            await store.setAuth({api_token: JSON.parse(result).access_token});
            Swal.fire({
              text: "You have successfully logged in!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
              },
            }).then(async () => {
              localStorage.setItem('username', username.value)
              await router.push({name: "dashboard"});
            });
          })
          .catch(error => {
            console.log('error', error)
            Swal.fire({
              text: error[0] as string,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-danger",
              },
            }).then(() => {
              store.errors = {};
            });
          });
      // Send login request
      // await store.login(values);
      JwtService.saveToken(values.api_token);
      store.setAuth({api_token: values.api_token})
      // const error = Object.values(store.errors);
      //
      // if (values.api_token) {
      //   Swal.fire({
      //     text: "You have successfully logged in!",
      //     icon: "success",
      //     buttonsStyling: false,
      //     confirmButtonText: "Ok, got it!",
      //     heightAuto: false,
      //     customClass: {
      //       confirmButton: "btn fw-semobold btn-light-primary",
      //     },
      //   }).then(() => {
      //     // Go to page after successfully login
      //     router.push({name: "dashboard"});
      //   });
      // } else {
      //   Swal.fire({
      //     text: error[0] as string,
      //     icon: "error",
      //     buttonsStyling: false,
      //     confirmButtonText: "Try again!",
      //     heightAuto: false,
      //     customClass: {
      //       confirmButton: "btn fw-semobold btn-light-danger",
      //     },
      //   }).then(() => {
      //     store.errors = {};
      //     router.push({name: "dashboard"});
      //   });
      // }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
      username,
      password
    };
  },
});
</script>
