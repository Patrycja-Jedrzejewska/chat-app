import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import "./style/style.scss";

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'



const app = createApp(App)
const pinia = createPinia();

app.use(router).use(pinia).use(bootstrap).mount("#app");







