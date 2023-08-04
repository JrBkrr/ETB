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
    heading: "ETB Menu",
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
        bootstrapIcon: "device-hdd-fill",
      },
      {
        heading: "versions",
        route: "/versions",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "logs",
        route: "/logs",
        keenthemesIcon: "code",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "settings",
        route: "/settings",
        keenthemesIcon: "setting-4",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "validations",
        route: "/validations",
        keenthemesIcon: "double-check-circle",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "userManagement",
        route: "/user-management",
        keenthemesIcon: "user-tick",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "signature",
        route: "/signature",
        keenthemesIcon: "pencil",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "app",
        route: "/app",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-layers",
      },
    ],
  },
];

export default MainMenuConfig;
