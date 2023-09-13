import { createRouter, createWebHistory } from 'vue-router'
import FullCardView from "../views/FullCardView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/detail',
    name: 'detail',
    component: FullCardView 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
