import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Loader from "@/components/app/Loader";

import messagePlugin from "@/utils/message.plugin";

createApp(App)
  .use(store)
  .use(router)
  .use(messagePlugin)
  .component("Loader", Loader)
  .mount("#app");
