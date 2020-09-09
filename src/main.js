import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
    apiKey: "AIzaSyD6VaOrWy9iANa9hJymbptL7YDC7PKZ6hM",
    authDomain: "rakuten-intern2020-b5.firebaseapp.com",
    databaseURL: "https://rakuten-intern2020-b5.firebaseio.com",
    projectId: "rakuten-intern2020-b5",
    storageBucket: "rakuten-intern2020-b5.appspot.com",
    messagingSenderId: "677223095236",
    appId: "1:677223095236:web:683056011b10dc74c5e291"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

Vue.use(VueGoogleMaps, {
  load: {
    key: "APIKEY",
    libraries: "places",
    region: "JP",
    language: "ja"
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
