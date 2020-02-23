import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Register BootstrapVue
import { BootstrapVue, BootstrapVueIcons, BSpinner } from 'bootstrap-vue';



// Set up API base URL
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('b-spinner', BSpinner);

// Import components.
require('./components/commons');
require('./components/characters');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
