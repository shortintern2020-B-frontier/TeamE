<template>
  <div class="detail">
    <navbar />
    <div class="package-container">
      <div class="contents-detail">
        <detailHero/>
        <packageDetail />
        <purchasedList/>
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
import purchasedList from '@/components/purchasedList.vue';


export default {
  name: 'detail',
  components: {
    navbar,
    joinButton,
    packageDetail
    purchasedList,
    detailHero
  }
}
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
