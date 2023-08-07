export interface MenuItem {
    heading?: string;
    sectionTitle?: string;
    route?: string;
    pages?: Array<MenuItem>;
    keenthemesIcon?: string;
    bootstrapIcon?: string;
    sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
    {
        route: "/",
        pages: [
            {
                heading: "dashboard",
                route: "/dashboard",
                keenthemesIcon: "element-11",
                bootstrapIcon: "bi-app-indicator",
            },
            {
                heading: "devices",
                route: "/devices",
                keenthemesIcon: "monitor-mobile",
                bootstrapIcon: "bi-app-indicator",
            },
            {
                heading: "versions",
                route: "/versions",
                keenthemesIcon: "abstract-22",
                bootstrapIcon: "bi-lightning-fill",
            },
            {
                heading: "logs",
                route: "/logs",
                keenthemesIcon: "to-right",
                bootstrapIcon: "bi-layers",
            },
            {
                heading: "settings",
                route: "/settings",
                keenthemesIcon: "setting-2",
                bootstrapIcon: "bi-layers",
            },
            {
                sectionTitle: "verifications",
                route: "/verifications",
                keenthemesIcon: "verify",
                bootstrapIcon: "bi-layers",
                sub: [
                    {
                        heading: "verifications",
                        route: "/verifications/all",
                    },
                    {
                        heading: "roleValidations",
                        route: "/verifications/role",
                    },
                ],
            },
            {
                heading: "userManagement",
                route: "/user-management",
                keenthemesIcon: "profile-user",
                bootstrapIcon: "bi-layers",
            },
            {
                heading: "signature",
                route: "/signature",
                keenthemesIcon: "feather",
                bootstrapIcon: "bi-layers",
            },
            {
                sectionTitle: "payments",
                route: "/payments",
                keenthemesIcon: "delivery-3",
                bootstrapIcon: "bi-layers",
                sub: [
                    {
                        heading: "doPayment",
                        route: "/payments/do-payment",
                    },
                    {
                        heading: "didPayment",
                        route: "/payments/did-payment",
                    },
                ],
            },
            {
                heading: "icons",
                route: "/app",
                keenthemesIcon: "paintbucket",
                bootstrapIcon: "bi-layers",
            },
        ],
    },
];

export default MainMenuConfig;
