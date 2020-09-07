<template>
  <div class="detail">
    <navBar />
    <joinButton />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import joinButton from "@/components/joinButton.vue";
import navBar from "@/components/navBar.vue";

export default {
  name: "detail",
  components: {
    joinButton,
    navBar
  }
};
</script>
