import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

require('./assets/css/reset.css');
require('./assets/css/styles.css');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
