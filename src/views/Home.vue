<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <head/>
    <homeHero></homeHero>
    <sample></sample>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import sample from '@/components/sample.vue'
import homeHero from '@/components/homeHero.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    sample,
    homeHero
  }
}
</script>
