import Vue from 'vue'
import App from './App.vue'
import FishUI from 'fish-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(FishUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
