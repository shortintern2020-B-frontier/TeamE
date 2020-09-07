<template>
  <div class="detail">
    <navbar />
    <div class="package-container">
      <div class="contents-detail">
        <packageDetail />
      </div>
      <div class="button-container">
        <joinButton />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import joinButton from "@/components/joinButton.vue";
import navbar from "@/components/navbar.vue";
import packageDetail from "@/components/packageDetail.vue";

export default {
  name: "detail",
  components: {
    joinButton,
    navbar,
    packageDetail
  }
};
</script>

<style lang="css">
.package-container {
  display: flex;
}

.contents-detail {
  width: 65%;
}

.button-container {
  width: 35%;
  padding-top: 48px;
}


</style>