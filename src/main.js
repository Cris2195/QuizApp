import Vue from "vue";
import App from "./App.vue";
import "../bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import Router from "./router"
import VueParticles from "vue-particles";
Vue.config.productionTip = false;

Vue.use(VueParticles);
Vue.use(BootstrapVue);
new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
