import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

// 2020/09/04 Ryo Omae
Vue.use(VueGoogleMaps, {
  load: {
    key: 'APIKEY',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
