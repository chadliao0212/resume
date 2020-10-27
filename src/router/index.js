import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/AppLayout';
import AboutMe from '@/views/AboutMe';
import AboutProject from '@/views/AboutProject';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
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
