<template>

<div class="home">
    <navbar/>
    <homeHero/>
    <packages/>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import navbar from "@/components/navbar.vue";
import homeHero from "@/components/homeHero.vue";
import packages from "@/components/packages.vue";


export default {
  name: 'Home',
  components: {
    navbar,
    homeHero,
    packages
  }
}
</script>
