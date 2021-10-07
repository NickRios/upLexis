import Vue from "vue";
import App from "./App.vue";

import "@/assets/scss/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

import Buefy from "buefy";

import router from "./router";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
