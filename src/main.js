import Vue from "vue";
import App from "./App.vue";
import "../bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import VueParticles from "vue-particles";
Vue.config.productionTip = false;

Vue.use(VueParticles);
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App)
}).$mount("#app");
