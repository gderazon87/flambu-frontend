import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { auth } from '../firebase';
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";

import './assets/main.scss'
import './assets/fonts/font-awesome/css/all.min.css'

Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAvudIPJoG_8-36wyhVv0TQbV_ZcjN2YvQ",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

auth.onAuthStateChanged(user => {
  if (user) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})