<template>
  <!--begin::Wrapper-->
  <div class="w-100 ">
    <!--begin::Form-->
    <VForm
        id="kt_login_signin_form"
        :initial-values="{ username: '', password: '' }"
        :validation-schema="login"
        class="form w-100"
        @submit="onSubmitLogin"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">{{ translate('signIn') }}</h1>
        <!--end::Title-->
      </div>
      <!--begin::Heading-->
      
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-dark">{{ translate('userName') }}</label>
        <!--end::Label-->
        
        <!--begin::Input-->
        <Field
            v-model="username"
            :placeholder="translate('userName')"
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="username"
            tabindex="1"
            type="text"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="username">
              {{ translate('checkInformation') }}
            </ErrorMessage>
          </div>
        </div>
      </div>
      <!--end::Input group-->
      
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bold text-dark fs-6 mb-0">{{ translate('password') }}</label>
          <!--end::Label-->
        </div>
        <!--end::Wrapper-->
        
        <!--begin::Input-->
        <Field
            v-model="password"
            :placeholder="translate('password')"
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="password"
            tabindex="2"
            type="password"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password">
              {{ translate('invalidPassword') }}
            </ErrorMessage>
          </div>
        </div>
      </div>
      <div class="text-center">
        <!--begin::Submit button-->
        <button
            id="kt_sign_in_submit"
            ref="submitButton"
            class="btn btn-lg btn-primary w-100 mb-5"
            tabindex="3"
            type="submit"
        >
          <span class="indicator-label"> {{ translate('continue') }} </span>
          
          <span class="indicator-progress">
            {{ translate('pleaseWait') }}...
            <span
                class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Submit button-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, onMounted, ref} from "vue";
import {ErrorMessage, Field, Form as VForm} from "vee-validate";
import {useAuthStore, type User} from "@/stores/auth";
import {useRouter} from "vue-router";
import * as Yup from "yup";
import JwtService from "@/core/services/JwtService";
import {GlobalStore} from "@/stores/global";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const {State, setNotifications} = GlobalStore()
    const router = useRouter();
    const username = ref('admin')
    const password = ref('pass')
    const submitButton = ref<HTMLButtonElement | null>(null);
    const {t, te} = useI18n();
    const i18n = useI18n();
    
    onMounted(() => {
      const lang = localStorage.getItem("lang");
      i18n.locale.value = lang || 'tr';
    })
    
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    
    //Create form validation object
    const login = Yup.object().shape({
      username: Yup.string().min(3).required().label(translate(('userName'))),
      password: Yup.string().min(4).required().label(translate('password')),
    });
    
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
      
      await fetch(`https://78.187.121.71:8000/oauth/token?grant_type=password&username=${username.value}&password=${password.value}&tenant_id=d391351c-33b2-416a-92e1-748e2c4e7102`, {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('HTTP hata, durum kodu: ' + response.status);
            }
            return response.text();
          })
          .then(async result => {
            JwtService.saveToken(values.api_token);
            store.setAuth({api_token: JSON.parse(result).access_token});
            State.Notifications.push({head: 'Giriş Başarılı', title: 'Anasayfaya yönlendiriliyorsunuz', variant: 'success', status: false})
            setTimeout(() => {
              localStorage.setItem('username', username.value)
              router.push({name: "dashboard"})
              submitButton.value?.removeAttribute("data-kt-indicator");
              submitButton.value!.disabled = false;
            }, 2000)
          })
          .catch(error => {
            submitButton.value?.removeAttribute("data-kt-indicator");
            submitButton.value!.disabled = false;
            State.Notifications.push({head: 'Giriş Başarısız', title: 'Lütfen bilgilerinizi kontrol edin ve yeniden deneyin!', variant: 'danger', status: false})
          });
    };
    return {
      State,
      setNotifications,
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
      username,
      password,
      translate
    };
  },
});
</script>
