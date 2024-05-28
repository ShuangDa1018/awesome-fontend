import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker1";
import router from "./router";
import store from "./store";
// import * as serviceWorkerRegistration from "./registerServiceWorker";
// serviceWorkerRegistration.register();
console.log(process.env);

createApp(App).use(store).use(router).mount("#app");
