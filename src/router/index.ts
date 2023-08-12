import {
    createRouter,
    createWebHashHistory, createWebHistory,
    type RouteRecordRaw,
} from "vue-router";
import {useAuthStore} from "@/stores/auth";
import {useConfigStore} from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/dashboard",
        component: () => import("@/layouts/main-layout/MainLayout.vue"),
        meta: {
            middleware: "auth",
        },
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                meta: {
                    pageTitle: "Dashboard",
                    breadcrumbs: ["Dashboards"],
                },
            },
            {
                path: "/devices",
                name: "devices",
                component: () => import("@/views/devices/index.vue"),
                meta: {
                    pageTitle: "Devices",
                    breadcrumbs: ["Devices"],
                },
            },
            {
                path: "/versions",
                name: "versions",
                component: () => import("@/views/versions/index.vue"),
                meta: {
                    pageTitle: "Versions",
                    breadcrumbs: ["Versions"],
                },
            },
            {
                path: "/logs",
                name: "logs",
                component: () => import("@/views/logs/index.vue"),
                meta: {
                    pageTitle: "Logs",
                    breadcrumbs: ["Logs"],
                },
            },
            {
                path: "/signature",
                name: "signature",
                component: () => import("@/views/signature/index.vue"),
                meta: {
                    pageTitle: "Signature",
                    breadcrumbs: ["Signature"],
                },
            },
            {
                path: "/settings",
                name: "settings",
                meta: {
                    pageTitle: "Settings",
                    breadcrumbs: ["Settings"],
                },
                children: [
                    {
                        path: "settings",
                        name: "settings",
                        component: () => import("@/views/settings/all/index.vue"),
                        meta: {
                            pageTitle: "Settings",
                            breadcrumbs: ["Settings", "All"],
                        },
                    },
                    {
                        path: "settings-template",
                        name: "settings-template",
                        component: () => import("@/views/settings/settingsTemplate/index.vue"),
                        meta: {
                            pageTitle: "Setting Template",
                            breadcrumbs: ["Settings", "Setting Template"],
                        },
                    },
                    {
                        path: "settings-updates",
                        name: "settings-updates",
                        component: () => import("@/views/settings/settingsUpdates/index.vue"),
                        meta: {
                            pageTitle: "Setting Updates",
                            breadcrumbs: ["Settings", "Setting Updates"],
                        },
                    },
                ]
            },
            {
                path: "/verifications",
                name: "verifications",
                meta: {
                    pageTitle: "Verifications",
                    breadcrumbs: ["Verifications"],
                },
                children: [
                    {
                        path: "all",
                        name: "verifications-all",
                        component: () =>
                            import("@/views/verifications/all.vue"),
                        meta: {
                            pageTitle: "Verifications",
                            breadcrumbs: ["Verifications", "All"],
                        },
                    },
                    {
                        path: "role",
                        name: "verifications-role",
                        component: () =>
                            import("@/views/verifications/role.vue"),
                        meta: {
                            pageTitle: "Role Verifications",
                            breadcrumbs: ["Verifications", "Role"],
                        },
                    },
                ]
            },
            {
                path: "/payments",
                name: "payments",
                meta: {
                    pageTitle: "Payments",
                    breadcrumbs: ["Payments"],
                },
                children: [
                    {
                        path: "do-payment",
                        name: "do-payments",
                        component: () =>
                            import("@/views/payments/doPayments.vue"),
                        meta: {
                            pageTitle: "Do Payments",
                            breadcrumbs: ["Payments", "Do Payment"],
                        },
                    },
                    {
                        path: "did-payment",
                        name: "did-payments",
                        component: () =>
                            import("@/views/payments/didPayments.vue"),
                        meta: {
                            pageTitle: "did Payments",
                            breadcrumbs: ["Payments", "Did Payment"],
                        },
                    },
                ]
            },
            {
                path: "/user-management",
                name: "user-management",
                component: () => import("@/views/usermanagement/index.vue"),
                meta: {
                    pageTitle: "User management",
                    breadcrumbs: ["User management"],
                },
            },
            {
                path: "/my-profile",
                name: "my-profile",
                component: () => import("@/views/profile/index.vue"),
                meta: {
                    pageTitle: "My Profile",
                    breadcrumbs: ["My Profile"],
                },
            },
            {
                path: "/map",
                name: "map",
                component: () => import("@/views/map/index.vue"),
                meta: {
                    pageTitle: "Map",
                    breadcrumbs: ["Map"],
                },
            },
            {
                path: "/app",
                name: "app",
                component: () => import("@/views/app/index.vue"),
                meta: {
                    pageTitle: "App",
                    breadcrumbs: ["App"],
                },
            },
        ],
    },
    {
        path: "/",
        component: () => import("@/layouts/AuthLayout.vue"),
        children: [
            {
                path: "/sign-in",
                name: "sign-in",
                component: () =>
                    import("@/views/authentication/basic-flow/SignIn.vue"),
                meta: {
                    pageTitle: "Sign In",
                },
            },
            {
                path: "/sign-up",
                name: "sign-up",
                component: () =>
                    import("@/views/authentication/basic-flow/SignUp.vue"),
                meta: {
                    pageTitle: "Sign Up",
                },
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: () =>
                    import("@/views/authentication/basic-flow/PasswordReset.vue"),
                meta: {
                    pageTitle: "Password reset",
                },
            },
        ],
    },
    {
        path: "/multi-step-sign-up",
        name: "multi-step-sign-up",
        component: () =>
            import("@/views/authentication/MultiStepSignUp.vue"),
        meta: {
            pageTitle: "Multi-step Sign up",
        },
    },
    {
        path: "/",
        component: () => import("@/layouts/SystemLayout.vue"),
        children: [
            {
                // the 404 route, when none of the above matches
                path: "/404",
                name: "404",
                component: () => import("@/views/authentication/Error404.vue"),
                meta: {
                    pageTitle: "Error 404",
                },
            },
            {
                path: "/500",
                name: "500",
                component: () => import("@/views/authentication/Error500.vue"),
                meta: {
                    pageTitle: "Error 500",
                },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const configStore = useConfigStore();

    // current page view title
    document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

    // reset config to initial state
    configStore.resetLayoutConfig();

    // verify auth token before each page change
    authStore.verifyAuth();

    // before page access check if page requires authentication
    if (to.meta.middleware == "auth") {
        if (authStore.isAuthenticated) {
            next();
        } else {
            next({name: "sign-in"});
        }
    } else {
        next();
    }

    // Scroll page to top on every route change
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

export default router;
