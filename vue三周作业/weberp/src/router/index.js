import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/MainContent.vue'
import FinanceManage from '../views/FinanceManage.vue'
import ProductManage from '../views/ProductManage.vue'
import OrderManage from '../views/OrderManage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: Content
  },
  {
    path: '/company',
    name: 'Company',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompanyManage.vue')
  },
  {
    path: '/finance',
    name: 'Finance',
    component: FinanceManage
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductManage
  },
  {
    path: '/order',
    name: 'Order',
    component: OrderManage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
