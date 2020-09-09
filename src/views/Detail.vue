<template>
  <div class="detail">
    <navbar />
    <detailHero :packagedata="packagedata" />
    <div class="package-container">
      <div class="contents-detail">
        <packageDetail :packagedata="packagedata" />
        <purchasedList :packagedata="packagedata" />
        <routeMap :packagedata="packagedata" />
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
import detailHero from "@/components/detailHero.vue";
import purchasedList from "@/components/purchasedList.vue";
import firebase from 'firebase'
import routeMap from "@/components/routeMap.vue";

export default {
  name: "detail",
  components: {
    navbar,
    joinButton,
    packageDetail,
    purchasedList,
    detailHero,
    routeMap
  },
  data:()=>({
    packagedata: {}
  }),
  mounted() {
    firebase.database().ref("package/" + this.$route.params.id)
      .on("value", snapshot => (this.packagedata=snapshot.val()));
  }
};
</script>

<style lang="css">
.detail {
  padding: 0;
  margin: 0;
}

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
