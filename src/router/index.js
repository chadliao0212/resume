import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/AppLayout';
import AboutMe from '@/views/AboutMe';
import AboutProject from '@/views/AboutProject';
import HomePage from '@/views/HomePage';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home-page',
        name: 'Home-Page',
        component: HomePage
      },
      {
        path: '/about-me',
        name: 'About-Me',
        component: AboutMe
      },
      {
        path: '/about-project',
        name: 'About-Project',
        component: AboutProject
      }
    ]
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
