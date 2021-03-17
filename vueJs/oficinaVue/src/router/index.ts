import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Welcome from "../views/welcome.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../views/todos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
