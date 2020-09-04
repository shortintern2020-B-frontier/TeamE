<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <sample/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import sample from '@/components/sample.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    sample
  }
}
</script>
