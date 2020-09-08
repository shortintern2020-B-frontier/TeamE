<template>
  <div class="route-map">
    <div class="detail-container">
      <h6>ルートマップ</h6>
      <p><v-img :src="src"/>}</p>
    </div>
  </div>

</template>
<script>
export default {
    data: () => {
        return {
            src: require('@/assets/routes/kyoto.png')
        }
    }
    
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
