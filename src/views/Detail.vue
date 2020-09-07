<template>
<div class="detail">
    <detailHero/>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import detailHero from "@/components/detailHero.vue";

export default {
  name: 'Detail',
  components: {
    detailHero
  }
}
</script>
