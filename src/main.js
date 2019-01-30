import Vue from 'vue'
import App from './App.vue'
import FishUI from 'fish-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store'
// import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'

Vue.use(socketio('http://localhost:3000/'))

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

Vue.use(FishUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
