import Vue from "vue";
import Router from "vue-router";
import Quiz from "./components/Quiz.vue";
import Menu from "./components/Menu.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "menu",
      component: Menu
    },
    {
      path: "/quiz",
      name: "quiz",
      component: Quiz
    }
  ]
});
