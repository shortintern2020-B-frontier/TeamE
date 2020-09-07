<template>
<div class="home">

  <packages/>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import packages from "@/components/packages.vue";

export default {
  name: "Home",
  components: {

    packages,
  }
};
</script>
