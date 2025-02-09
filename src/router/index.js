import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    { path: '/', component: () => import("../views/WelcomeView.vue") },
    { path: '/start', component: () => import("../views/HomeView.vue") },
    { path: '/about', component: () => import('../views/AboutView.vue')},
    { path: '/personagens', component: () => import('../views/Personagens.vue')},

  ],
})

export default router
