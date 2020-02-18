import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import components.
require('./components/characters');

new Vue({
  render: h => h(App),
}).$mount('#app')
