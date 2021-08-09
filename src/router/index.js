import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from '@/layout/AppLayout';
import AboutMe from "@/views/AboutMe";
import HomePage from "@/views/HomePage";
import AnimalCrossing from "@/views/AnimalCrossing";
import PersonalWeb from "@/views/PersonalWeb";

import KFC from "@/views/KFC";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home-Page",
    component: HomePage,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about-me",
    name: "About-Me",
    component: AboutMe,
    meta: {
      title: "About Me",
    },
  },
  {
    path: "/animal-crossing",
    name: "AnimalCrossing",
    component: AnimalCrossing,
    meta: {
      title: "Animal Crossing",
    },
  },
  {
    path: "/personal-web",
    name: "PersonalWeb",
    component: PersonalWeb,
    meta: {
      title: "Personal Web",
    },
  },
  {
    path: "/kfc",
    name: "KFC",
    component: KFC,
    meta: {
      title: "KFC",
    },
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

router.beforeEach((to, from, next) => {
  document.title = `Chad Liao | ${to.meta.title}`
  next();
})

export default router;
