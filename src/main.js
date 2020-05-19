import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

require('./assets/css/reset.css');
require('./assets/css/styles.css');

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://ws-pwa.herokuapp.com/')
}))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
