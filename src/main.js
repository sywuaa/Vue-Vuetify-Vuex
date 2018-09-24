import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import store from './assets/store/store.js';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);


new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
