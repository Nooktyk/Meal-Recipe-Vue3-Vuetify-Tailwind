import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as icons from "vuetify/iconsets";

const vuetify = createVuetify({
    components,
    directives,
    icons,
});

createApp(App).use(vuetify).use(router).use(store).mount("#app");
