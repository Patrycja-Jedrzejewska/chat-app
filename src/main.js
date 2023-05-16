import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import "./style/style.scss";

const app = createApp(App)
const pinia = createPinia();

app.use(router).use(pinia).mount("#app");







