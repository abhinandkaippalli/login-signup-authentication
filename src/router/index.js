import { createRouter, createWebHistory } from 'vue-router'
import VueLogin from '../views/VueLogin.vue'
import VueSignup from '../views/VueSignup.vue'
import VuePost from '../views/VuePost.vue'

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
    },
    {
      path: '/post', 
      name: 'PostPage',
      component: VuePost
    }
  ]
})

export default router
