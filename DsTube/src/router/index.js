import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/LandingView.vue'),
    },
    {
      path: '/profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/full',
      component: () => import('../views/FullCardView.vue')
    },
  ],
})
