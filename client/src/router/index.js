import { createRouter, createWebHistory } from 'vue-router'
import { authorized, createdPost } from '../middleware/middleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/new',
      beforeEnter: [authorized, createdPost],
      component: () => import('../views/NewView.vue')
    },
    {
      path: '/post/:postId',
      beforeEnter: authorized,
      component: () => import('../views/HackView.vue')
    },
    {
      path: '/author/:userId/post/:postId',
      component: () => import('../views/PostView.vue')
    }
  ]
})

export default router
