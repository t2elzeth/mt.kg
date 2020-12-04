import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ar/add',
    name: 'AddAr',
    component: () => import("@/views/AddArView")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/auth/Login")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
