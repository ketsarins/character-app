import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Set up API base URL
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

Vue.config.productionTip = false

// Register BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue);

// Import components.
require('./components/characters');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
