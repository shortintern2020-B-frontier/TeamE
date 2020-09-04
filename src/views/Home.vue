<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <GoogleMapLoader/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import GoogleMapLoader from '@/components/GoogleMapLoader.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    GoogleMapLoader
  }
}
</script>
