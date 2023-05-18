import VueRouter from "vue-router";
import Vue from "vue";
Vue.us;
const routes = [
  { path: "/", component: () => import("@/pages/MainPage") },
  { path: "/", component: () => import("@/pages/NotFound") },
];

const router = new VueRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
