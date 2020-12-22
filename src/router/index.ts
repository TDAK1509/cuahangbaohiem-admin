import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("../views/NotFound.vue")
  },
  {
    path: "/bao-hiem/o-to",
    name: "CarInsurance",
    component: () => import("../views/CarInsurance.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
