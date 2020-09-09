/**
 * @author Kota Yukawa
 */

<template>
  <div class="route-map">
    <div class="title-container">
      <h6>ルートマップ</h6>
    </div>
    <div class="detail-container">
      <p><v-img :src="packagedata.route_image"/></p>
    </div>
  </div>

</template>
<script>
export default {
  props: ['packagedata']
};
</script>

<style lang="css">
.title-container {
  margin-top: 64px;
  padding-bottom: 16px;
  padding-left: 48px;
  border-bottom: solid 2px #e3e3e3;
}

.title-container h2 {
  font-size: 32px;
}

.detail-container {
  margin-top: 32px;
  padding-left: 48px;
}

.detail-container p {
  padding-top: 32px;
  font-size: 16px;
}
</style>
