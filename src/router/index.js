import { createRouter, createWebHistory } from 'vue-router'
import PageSignUp from '@/pages/PageSignUp.vue'
import PageSignIn from '@/pages/PageSignIn.vue'
import PageAllEmail from '@/pages/PageAllEmail.vue'
import PageCompose from '@/pages/PageCompose.vue'
import PageAddress from '@/pages/PageAddress.vue'

const routes = [
  { path: '/', component: PageSignUp },
  { path: '/sign-up', component: PageSignUp },
  { path: '/sign-in', component: PageSignIn },
  { path: '/all-emails', component: PageAllEmail },
  { path: '/compose', component: PageCompose },
  { path: '/addresses', component: PageAddress },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
