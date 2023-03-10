import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const myAllBlackTheme = {
    dark: false,
    colors: {
        background: "#000000",
        surface: "#000000",
        primary: "red",
        secondary: "#000000",
        error: "#000000",
        info: "red",
        success: "#000000",
        warning: "#000000",
    },
};

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
    theme: {
        defaultTheme: "myAllBlackTheme",
        themes: {
            myAllBlackTheme,
        },
    },
});

createApp(App).use(vuetify).use(router).use(store).mount("#app");
