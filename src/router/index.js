import Vue from "vue";
import VueRouter from "vue-router";
import main from "../components/main.vue";
import day1 from "../components/day1.vue";
import day2 from "../components/day2.vue";
import day3 from "../components/day3.vue";
import foodies from "../components/Foodies.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: main,
    },
    {
      path: "/day1",
      component: day1,
    },
    {
      path: "/day2",
      component: day2,
    },
    {
      path: "/day3",
      component: day3,
    },
    {
      path: "/foodies",
      component: foodies,
    },
  ],
});

export default router;
