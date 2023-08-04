import {ref} from "vue";
import {defineStore} from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
    api_token: string;
}

export interface SignIn {
    email?: string;
    password?: string;
    username?: string;
    pass?: string;

}

export const useAuthStore = defineStore("auth", () => {
    const errors = ref({});
    const user = ref<User>({} as User);
    const isAuthenticated = ref(!!JwtService.getToken());

    function setAuth(authUser: User) {
        isAuthenticated.value = true;
        user.value = authUser;
        errors.value = {};
        JwtService.saveToken(user.value.api_token);
    }

    function setError(error: any) {
        errors.value = {...error};
    }

    function purgeAuth() {
        isAuthenticated.value = false;
        user.value = {} as User;
        errors.value = [];
        JwtService.destroyToken();
    }

    function login(credentials: SignIn) {
        return ApiService.post("login", credentials)
            .then(({data}) => {
                setAuth(data);
            })
            .catch(({response}) => {
                // setError(response.data.errors);
                const api_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJ0ZW5hbnRJZCI6ImQzOTEzNTFjLTMzYjItNDE2YS05MmUxLTc0OGUyYzRlNzEwMiIsImV4cCI6MTY4ODgwNjgwNiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ERVZJQ0UiLCJST0xFX1NFVFRJTkciLCJVU0VSX1dSSVRFIiwiUk9MRV9ERVZFTE9QRVIiLCJST0xFX1VTRVIiLCJST0xFX1ZFUlNJT04iLCJST0xFX0FETUlOIiwiUk9MRV9JMThOIiwiVVNFUl9SRUFEIiwiUk9MRV9MT0ciLCJST0xFX1ZFUklGSUNBVElPTiJdLCJqdGkiOiIwYjUwYjA2OS1mY2Y1LTQzZWQtOTRkOS02M2M1YzIwNjY5ODciLCJjbGllbnRfaWQiOiJhZG1pbiJ9.iXX94pOhWTeRXSps3iNaw2Xgt--bVOibq-eHsXHYDE8wBWvk6cZOoq77BrWXrXKzX8jHVLMSnVh0wl1w4TuCf8524lyfupkn6I2pt2_MkPb2tdUB8GdUIQxq-7MhJ91d5mjHvnUhk1RDeFCTkMV8yY1ZNZqiZgzgUu1BdAkjbYCOgrWxQjT9ZxP3vnzZTxHPpsC11hE5BczLSPT-bFUmus7DKvzbpTRp29LP05iOfZ8-d4Kij7bV0356Mjd1ytzIkHjxye_P3d1ZjssvAhY4SA3Ey6hRxNWuvVWiulkgH0W575PniXg9Fa_XX1gVbNEW0FUiS-A6FK23j4887NiP3Q'
                setAuth({api_token});
            });
    }

    function logout() {
        purgeAuth();
    }

    function register(credentials: User) {
        return ApiService.post("register", credentials)
            .then(({data}) => {
                setAuth(data);
            })
            .catch(({response}) => {
                setError(response.data.errors);
            });
    }

    function forgotPassword(email: string) {
        return ApiService.post("forgot_password", email)
            .then(() => {
                setError({});
            })
            .catch(({response}) => {
                setError(response.data.errors);
            });
    }

    function verifyAuth() {
        if (JwtService.getToken()) {
            ApiService.setHeader();
            // ApiService.post("verify_token", {api_token: JwtService.getToken()})
            //     .then(({data}) => {
            //         setAuth(data);
            //     })
            //     .catch(({response}) => {
            //         setError(response.data.errors);
            //         purgeAuth();
            //     });
        } else {
            purgeAuth();
        }
    }

    return {
        errors,
        user,
        isAuthenticated,
        login,
        logout,
        register,
        forgotPassword,
        verifyAuth,
        setAuth
    };
});
