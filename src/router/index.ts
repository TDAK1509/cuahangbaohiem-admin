import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import AuthController from "@/controller/auth";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "HomePageContent",
        component: () => import("../views/HomePageContent.vue")
      },
      {
        path: "/bao-hiem/o-to",
        name: "CarInsurance",
        component: () => import("../views/CarInsurance.vue")
      }
    ]
  },

  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isLoginPage = to.name === "Login";

  if (!AuthController.isAuth()) {
    return !isLoginPage ? next({ name: "Login" }) : next();
  }

  if (isLoginPage) {
    return next("/");
  }

  next();
});

export default router;
