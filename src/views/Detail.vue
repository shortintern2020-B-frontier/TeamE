<template>
  <div class="detail">
    <navbar />
    <detailHero/>
    <joinButton />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import joinButton from "@/components/joinButton.vue";
import navbar from "@/components/navbar.vue";
import detailHero from "@/components/detailHero.vue";

export default {
  name: "detail",
  components: {
    joinButton,
    navbar,
    detailHero
  }
};
</script>
