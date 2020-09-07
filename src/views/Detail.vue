<template>
  <div class="detail">
    <navbar/>
    <detailHero/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import navbar from "@/components/navbar.vue";
import detailHero from "@/components/detailHero.vue";

export default {
  name: 'Detail',
  components: {
    navbar,
    detailHero
  }
}
</script>
