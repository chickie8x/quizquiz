import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PartA.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'partA',
      component: HomeView
    },
    {
      path: '/partb',
      name: 'partB',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PartB.vue')
    },
    {
      path: '/random',
      name: 'random',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Random.vue')
    }
  ]
})

export default router
