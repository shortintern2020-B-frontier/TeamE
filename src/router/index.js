/* 
   @auther Tomoharu Yanase
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/map",
    name: "map",
    component: () => import("../views/Map.vue")
  },
  {
    path: "/traveling",
    name: "traveling",
    component: () => import("../views/Traveling.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  }
];

const router = new VueRouter({
  routes
});

export default router;
