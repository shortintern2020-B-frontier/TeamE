import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import vuetify from './plugins/vuetify';
import firebase from "firebase";

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "AUTHDOMAIN",
  databaseURL: "DBURL",
  projectId: "PROJECTID",
  storageBucket: "BUCKET",
  messagingSenderId: "ID",
  appId: "APIID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;


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
  vuetify,
  render: h => h(App)
}).$mount('#app')
