<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <head/>
    <streetView></streetView>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import streetView from '@/components/streetView.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // 2020/09/04 Ryo Omae
    streetView
  }
}
</script>
