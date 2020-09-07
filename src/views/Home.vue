<template>
<div class="home">
  <homeHero/>
  <packages/>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import packages from "@/components/homeHero.vue";
import homeHero from "@/components/packages.vue";


export default {
  name: 'Home',
  components: {
    homeHero,
    packages
  }
}
</script>
