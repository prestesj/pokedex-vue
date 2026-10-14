import { createRouter, createWebHistory } from 'vue-router'
import geracao1 from '../views/geracao1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'geracao1',
      component: geracao1,
    },
    {
      path: '/geracao2',
      name: 'geracao2',
      component: () => import('../views/geracao2.vue'),
    },
      {
      path: '/geracao3',
      name: 'geracao3',
      component: () => import('../views/geracao3.vue'),
    },
  ],
})

export default router
