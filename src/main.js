import Vue from 'vue'
import App from './App.vue'
import KEYS from '../keys/index.js'

import * as VueGoogleMaps from 'vue2-google-maps';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';

import vSelect from 'vue-select'

Vue.component('v-select', vSelect)


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VueGoogleMaps, {
    load: {
      key: KEYS.GOOGLE_MAPS
    }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
