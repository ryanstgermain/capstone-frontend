import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import './views/Signup.vue'
import './views/About.vue'
import './views/Listings.vue'
import './views/Item.vue'
import './views/Chat.vue'
import './views/Create.vue'

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
    },
    {
      path: '/item',
      name: 'item',
      component: () => import('./views/Item.vue')
    },
    {
      path: '/message',
      name: 'chat',
      component: () => import('./views/Chat.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/Create.vue')
    }
  ]
})
