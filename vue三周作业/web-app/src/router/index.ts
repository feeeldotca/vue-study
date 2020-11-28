import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import jindutown from '@/components/jindutown.vue'
import jindulife from '@/components/jindulife.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: jindutown
  },
  {
    path: '/about',
    name: 'About',
    component: jindulife
  }
]

const router = new VueRouter({
  routes,
  // linkActiveClass: 'selected',
  linkExactActiveClass: 'selected'
})

export default router
