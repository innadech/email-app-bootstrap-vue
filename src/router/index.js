import { createRouter, createWebHistory } from 'vue-router'
import PageSignUp from '@/pages/PageSignUp.vue'
import PageSignIn from '@/pages/PageSignIn.vue'
import PageAllEmail from '@/pages/PageAllEmail.vue'
import PageCompose from '@/pages/PageCompose.vue'
import PageAddress from '@/pages/PageAddress.vue'

const routes = [
  { path: '/signUp', component: PageSignUp },
  { path: '/signIn', component: PageSignIn },
  { path: '/allEmail', component: PageAllEmail },
  { path: '/compose', component: PageCompose },
  { path: '/address', component: PageAddress },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
