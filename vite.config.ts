import {fileURLToPath, URL} from "node:url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import mkcert from "vite-plugin-mkcert"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), mkcert()],
    // plugins: [vue()],
    resolve: {
        alias: {
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        port: 9000,
        host: '0.0.0.0',
        https: true
    },
    // Çıktı için mutlak URL tanımlama (örn. "/my-project/" veya "//cdn.example.com/")
    base: "",
    build: {
        chunkSizeWarningLimit: 3000,
    },
});
