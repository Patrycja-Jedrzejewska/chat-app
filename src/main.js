import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import Vue3linkify from "vue-3-linkify";

import "./style/style.scss";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).use(Vue3linkify).use(bootstrap).mount("#app");
