import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";
import store from "./store/index";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
app.config.globalProperties.$axios = axios;
axios.interceptors.response.use((res) => {
  return res.data;
});

app.use(store).use(router).use(ElementPlus);
app.mount("#app");
