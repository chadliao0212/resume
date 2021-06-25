import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from '@/layout/AppLayout';
import AboutMe from "@/views/AboutMe";
import HomePage from "@/views/HomePage";
import AnimalCrossing from "@/views/AnimalCrossing";
import KFC from "@/views/KFC";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home-Page",
    component: HomePage,
  },
  {
    path: "/about-me",
    name: "About-Me",
    component: AboutMe,
  },
  {
    path: "/animal-crossing",
    name: "AnimalCrossing",
    component: AnimalCrossing,
  },
  {
    path: "/kfc",
    name: "KFC",
    component: KFC,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
