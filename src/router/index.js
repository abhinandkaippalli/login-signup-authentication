import { createRouter, createWebHistory } from 'vue-router'
import VueLogin from '../views/VueLogin.vue'
import VueSignup from '../views/VueSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: VueLogin
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: VueSignup
    }
  ]
})

export default router
