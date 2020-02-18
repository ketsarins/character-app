import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

// Set up API base URL
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

Vue.config.productionTip = false

// Import components.
require('./components/characters');

new Vue({
  render: h => h(App),
}).$mount('#app')
