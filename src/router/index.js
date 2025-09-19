import { createRouter, createWebHistory } from 'vue-router'

import SecondPage from '@/views/SecondPage.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage,
    },
  ],
})

export default router
