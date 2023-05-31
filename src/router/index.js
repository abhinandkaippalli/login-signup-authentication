import { createRouter, createWebHistory } from 'vue-router'
import VueHome from '../views/VueHome.vue'
import VueLogin from '../views/VueLogin.vue'
import VueSignup from '../views/VueSignup.vue'
import VuePost from '../views/VuePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: VueHome
    },
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
      path: '/posts', 
      name: 'PostPage',
      component: VuePost
    }
  ]
})

export default router
