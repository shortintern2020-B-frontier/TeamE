<template>
<div class="home">
  <navBar></navBar>
  <img alt="Vue logo" src="../assets/logo.png" />
  <head />
  <sample></sample>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import sample from "@/components/sample.vue";
import navBar from "@/components/navBar.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    sample,
    navBar
  }
};
</script>
