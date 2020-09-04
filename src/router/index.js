import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'APIKEY',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component : () => import('../views/Detail.vue')
  },
  {
    path: '/map',
    name: 'map',
    component : () => import('../views/Map.vue')
  },
  {
    path: '/traveling',
    name: 'traveling',
    component : () => import('../views/Traveling.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
