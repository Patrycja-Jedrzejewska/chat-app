import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import "https://kit.fontawesome.com/99fe57fb2d.js"
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import "./style/style.scss";

const app = createApp(App)
const pinia = createPinia();

app.use(router).use(pinia).use(bootstrap).mount("#app");







