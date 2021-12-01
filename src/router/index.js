import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Pricing from '../views/Pricing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: "Timenow -  a modern social media management software"
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pricing.vue'),
    meta:{
      title: "Timenow - Pricing"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title;
  next()
})
export default router
