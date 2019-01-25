import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import './views/Signup.vue'
import './views/About.vue'
import './views/Listings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/listings',
      name: 'listings',
      component: () => import('./views/Listings.vue')
    }
  ]
})
